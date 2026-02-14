import ReactDOM from "react-dom/client";
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonContent,
  IonIcon,
  IonLabel,
  IonPage,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import {
  homeOutline,
  cloudUploadOutline,
  settingsOutline,
} from "ionicons/icons";

/* Ionic CSS — must load before app styles */
import "@ionic/react/css/core.css";
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* App styles */
import "./style.css";

/* Initialize Ionic React */
setupIonicReact();
import UploadBook from "./components/upload-book/upload";

function HomePage() {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="flex justify-center place-content-center h-screen w-screen">
          Welcome To Booksbay
        </div>
      </IonContent>
    </IonPage>
  );
}

function SettingsPage() {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="flex justify-center place-content-center h-screen w-screen">
          Profile
        </div>
      </IonContent>
    </IonPage>
  );
}

function App() {
  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route path="/tabs/home" component={HomePage} exact />
            <Route
              path="/tabs/upload"
              exact
              render={() => (
                <IonPage>
                  <IonContent fullscreen>
                    <UploadBook />
                  </IonContent>
                </IonPage>
              )}
            />
            <Route path="/tabs/setting" component={SettingsPage} exact />
            <Route exact path="/tabs">
              <Redirect to="/tabs/home" />
            </Route>
            <Route exact path="/">
              <Redirect to="/tabs/home" />
            </Route>
          </IonRouterOutlet>

          <IonTabBar slot="bottom">
            <IonTabButton tab="home" href="/tabs/home">
              <IonIcon icon={homeOutline} />
              <IonLabel>Home</IonLabel>
            </IonTabButton>

            <IonTabButton tab="upload" href="/tabs/upload">
              <IonIcon icon={cloudUploadOutline} />
              <IonLabel>Upload</IonLabel>
            </IonTabButton>
            <IonTabButton tab="setting" href="/tabs/setting">
              <IonIcon icon={settingsOutline} />
              <IonLabel>Account</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
}

const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}
