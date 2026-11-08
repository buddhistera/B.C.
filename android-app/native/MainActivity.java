package app.vercel.buddhist_era.twa;

import android.os.Bundle;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        registerPlugin(AppBarsPlugin.class);          // ඉහළ / පහළ තීරු වර්ණය (script.js → syncAppBars)
        super.onCreate(savedInstanceState);
        AppBarsPlugin.apply(this, AppBarsPlugin.LIGHT, false);   // ආරම්භයේ: ඇප් එකේ ක්‍රීම් වර්ණය
    }
}
