import * as React from 'react';
import {Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import IndexPage from "./pages/IndexPage";
import ErrorPage from "./pages/ErrorPage";
import DebugPage from "./pages/DebugPage";
import EventPageBlock from "./pages/elements/EventPageBlock";
import OBSLayout from "./pages/elements/OBSLayout";
import OBSControl from "./pages/elements/OBSControl";

export default function App() {

  return (
      <Routes>
          <Route path="/">

              <Route element={<MainLayout />}>
                  <Route index element={<IndexPage />} />
                  <Route path="debug" element={<DebugPage />} />

                  <Route path="*" element={<ErrorPage/>} />

              </Route>

              <Route path="widget">
                  <Route path="event-page-block" element={<EventPageBlock />} />
                  <Route path="obs-layout" element={<OBSLayout />} />
                  <Route path="obs-control" element={<OBSControl />} />
              </Route>

          </Route>

      </Routes>
  );
}