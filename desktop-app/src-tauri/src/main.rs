// Buddhist Era — Windows ඇප් එක (Tauri). වෙබ් ගොනු (www) .exe එක ඇතුළේම ඇති නිසා offline ක්‍රියා කරයි.
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use base64::Engine;
use tauri_plugin_dialog::DialogExt;
use tauri_plugin_opener::OpenerExt;

/// JPG / PNG ගොනුවක් Windows "Save as" කවුළුවෙන් සුරකියි (uposatha.js, info.js → desktopSaveFile).
#[tauri::command]
async fn save_file(app: tauri::AppHandle, name: String, data: String) -> Result<bool, String> {
    let bytes = base64::engine::general_purpose::STANDARD
        .decode(data.as_bytes())
        .map_err(|e| e.to_string())?;
    let ext = name.rsplit('.').next().unwrap_or("").to_lowercase();
    let mut dialog = app.dialog().file().set_file_name(name.clone());
    dialog = match ext.as_str() {
        "jpg" | "jpeg" => dialog.add_filter("JPEG image", &["jpg", "jpeg"]),
        "png" => dialog.add_filter("PNG image", &["png"]),
        _ => dialog,
    };
    match dialog.blocking_save_file() {
        Some(fp) => {
            let path = fp.into_path().map_err(|e| e.to_string())?;
            std::fs::write(path, bytes).map_err(|e| e.to_string())?;
            Ok(true)
        }
        None => Ok(false), // පරිශීලකයා Cancel කළා
    }
}

/// බාහිර සබැඳි (https / mailto) පරිගණකයේ පෙරනිමි browser / email ඇප් එකේ විවෘත කරයි.
#[tauri::command]
fn open_url(app: tauri::AppHandle, url: String) -> Result<(), String> {
    let ok = url.starts_with("https://") || url.starts_with("http://") || url.starts_with("mailto:");
    if !ok {
        return Err("blocked".into());
    }
    app.opener().open_url(url, None::<&str>).map_err(|e| e.to_string())
}

fn main() {
    tauri::Builder::default()
        .plugin(tauri_plugin_dialog::init())
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![save_file, open_url])
        .run(tauri::generate_context!())
        .expect("error while running Buddhist Era");
}
