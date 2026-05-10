/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { Home } from "./pages/Home";
import { AboutUs } from "./pages/AboutUs";
import { FAQ } from "./pages/FAQ";
import { Legal } from "./pages/Legal";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { TermsOfService } from "./pages/TermsOfService";
import { LogProvider } from "./context/LogContext";
import { ThemeProvider } from "./context/ThemeContext";
import { LoadingProvider } from "./context/LoadingContext";
import { GlobalLoader } from "./components/ui/GlobalLoader";

export default function App() {
  return (
    <ThemeProvider>
      <LoadingProvider>
        <GlobalLoader />
        <LogProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<AboutUs />} />
                <Route path="faq" element={<FAQ />} />
                <Route path="privacy" element={<PrivacyPolicy />} />
                <Route path="terms" element={<TermsOfService />} />
                <Route path="*" element={<Home />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </LogProvider>
      </LoadingProvider>
    </ThemeProvider>
  );
}
