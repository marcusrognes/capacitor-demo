import {SplashScreen} from '@capacitor/splash-screen';
import {Camera} from '@capacitor/camera';
import {StatusBar, Style} from "@capacitor/status-bar";

function wait(ms) {
	return new Promise(resolve => {
		setTimeout(resolve, ms);
	});
}

async function init() {
	await wait(500);
	await SplashScreen.hide();
	return;
	await wait(500);
	await StatusBar.setStyle({style: Style.Dark});
	await StatusBar.setBackgroundColor({color: '#00000000'})
	await StatusBar.setOverlaysWebView({overlay: true});
}

window.customElements.define(
	'capacitor-welcome',
	class extends HTMLElement {
		constructor() {
			super();

			init().then(() => console.log("Done init"));

			const root = this.attachShadow({mode: 'open'});

			root.innerHTML = `
    <style>
      :host {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        min-height: 100vh;
        background: red;
      }
      main {
        position: absolute;
        background: green;
        top: env(safe-area-inset-top);
        right: env(safe-area-inset-right);
        bottom: env(safe-area-inset-bottom);
        left: env(safe-area-inset-left);
      }
      .bottom {
      position: absolute;
      bottom: 0;
      
      }
    </style>
    <div>
      <main>
        Top
        
        <div class="bottom">
        Bottom
        </div>
      </main>
    </div>
    `;
		}
	}
);
