package app.vercel.buddhist_era.twa;

import android.os.Bundle;
import android.util.Log;
import com.getcapacitor.BridgeActivity;
import com.google.android.play.core.appupdate.AppUpdateInfo;
import com.google.android.play.core.appupdate.AppUpdateManager;
import com.google.android.play.core.appupdate.AppUpdateManagerFactory;
import com.google.android.play.core.appupdate.AppUpdateOptions;
import com.google.android.play.core.install.model.AppUpdateType;
import com.google.android.play.core.install.model.UpdateAvailability;

public class MainActivity extends BridgeActivity {
    private static final String TAG = "BuddhistEraUpdate";
    private AppUpdateManager updateManager;
    private boolean askedThisLaunch = false;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        registerPlugin(AppBarsPlugin.class);          // ඉහළ / පහළ තීරු වර්ණය (script.js → syncAppBars)
        super.onCreate(savedInstanceState);
        AppBarsPlugin.apply(this, AppBarsPlugin.LIGHT, false);   // ආරම්භයේ: ඇප් එකේ ක්‍රීම් වර්ණය
        try { updateManager = AppUpdateManagerFactory.create(this); } catch (Exception e) { updateManager = null; }
    }

    /**
     * Google Play යාවත්කාලීන දැනුම්දීම (Play In-App Updates — "Update available" තිරය).
     * Play Store එකේ නව version එකක් ඇත්නම් ඇප් එක විවෘත කරන විට පෙන්වයි (online විට පමණි).
     * පරිශීලකයාට X / Back මගින් එය වසා ඇප් එක දිගටම භාවිතා කළ හැකිය; එවිට එම විවෘත කිරීමේදී නැවත නොඅසයි.
     * Play Store එකෙන් ස්ථාපනය නොකළ (debug / APK) ඇප් වල කිසිවක් නොපෙන්වයි.
     */
    @Override
    public void onResume() {
        super.onResume();
        if (updateManager == null) return;
        updateManager.getAppUpdateInfo().addOnSuccessListener(info -> {
            int a = info.updateAvailability();
            boolean resume = a == UpdateAvailability.DEVELOPER_TRIGGERED_UPDATE_IN_PROGRESS;   // අඩක් වූ යාවත්කාලීනය
            boolean fresh = a == UpdateAvailability.UPDATE_AVAILABLE && !askedThisLaunch
                    && info.isUpdateTypeAllowed(AppUpdateType.IMMEDIATE);
            if (resume || fresh) {
                askedThisLaunch = true;
                start(info);
            }
        }).addOnFailureListener(e -> Log.i(TAG, "update check skipped: " + e.getMessage()));
    }

    private void start(AppUpdateInfo info) {
        try {
            updateManager.startUpdateFlow(info, this, AppUpdateOptions.newBuilder(AppUpdateType.IMMEDIATE).build());
        } catch (Exception e) {
            Log.i(TAG, "update flow failed: " + e.getMessage());
        }
    }
}
