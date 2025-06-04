import {Outlet, useLocation} from "react-router-dom";
import {Header} from "@/shared/ui/Header/Header.tsx";
import {Footer} from "@/shared/ui/Footer/Footer.tsx";
import {useWindowSize} from "@/shared/hooks/useWindowSize.ts";
import {BREAKPOINTS} from "@/shared/theme/breakpoints.ts";
import {Layout, MainLayoutWrapper} from "@/layouts/MainLayout.styles.ts";

const pageMeta: Record<string, { title: string }> = {
  "/rates": {
    title: "Rates",
  },
  "/convert": {
    title: "Currency Converter",
  },
};

const MainLayout = () => {
  const location = useLocation();
  const meta = pageMeta[location.pathname];
  const size = useWindowSize();
  const isMobile = size < BREAKPOINTS.desktop;

  return (
    <Layout>
      <Header title={meta?.title || "Page"}  isMobile={isMobile}/>
      <MainLayoutWrapper>
        <Outlet />
      </MainLayoutWrapper>
      {isMobile && <Footer />}
    </Layout>
  )
}

export default MainLayout
