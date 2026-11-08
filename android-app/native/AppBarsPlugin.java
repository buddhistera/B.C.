package app.vercel.buddhist_era.twa;

import android.app.Activity;
import android.graphics.Color;
import android.os.Build;
import android.view.View;
import android.view.Window;
import androidx.core.view.WindowCompat;
import androidx.core.view.WindowInsetsControllerCompat;
import com.getcapacitor.Bridge;
import com.getcapacitor.BridgeActivity;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

/** ඉහළ (status) හා පහළ (navigation) තීරුවල පසුබිම ඇප් එකේ තේමාවට (ආලෝක / අඳුරු) ගැලපීම. */
@CapacitorPlugin(name = "AppBars")
public class AppBarsPlugin extends Plugin {
    static final int LIGHT = 0xFFF5EDDA;

    static void apply(final Activity a, final int color, final boolean dark) {
        if (a == null) return;
        a.runOnUiThread(() -> {
            Window w = a.getWindow();
            View decor = w.getDecorView();
            decor.setBackgroundColor(color);
            View content = a.findViewById(android.R.id.content);
            if (content != null) content.setBackgroundColor(color);
            if (Build.VERSION.SDK_INT < 35) {             // Android 15+ හි තීරු විනිවිද පෙනෙන නිසා යටින් ඇති වර්ණය පෙනේ
                w.setStatusBarColor(color);
                w.setNavigationBarColor(color);
            }
            if (Build.VERSION.SDK_INT >= 29) {
                w.setStatusBarContrastEnforced(false);
                w.setNavigationBarContrastEnforced(false);
            }
            WindowInsetsControllerCompat c = WindowCompat.getInsetsController(w, decor);
            c.setAppearanceLightStatusBars(!dark);           // ආලෝක තේමාවේ අඳුරු අයිකන, අඳුරු තේමාවේ සුදු අයිකන
            c.setAppearanceLightNavigationBars(!dark);
            if (a instanceof BridgeActivity) {
                Bridge b = ((BridgeActivity) a).getBridge();
                if (b != null && b.getWebView() != null) b.getWebView().setBackgroundColor(color);
            }
        });
    }

    @PluginMethod
    public void setColors(PluginCall call) {
        int color;
        try { color = Color.parseColor(call.getString("color", "#F5EDDA")); }
        catch (Exception e) { call.reject("Invalid color"); return; }
        apply(getActivity(), color, Boolean.TRUE.equals(call.getBoolean("dark", false)));
        call.resolve();
    }
}
