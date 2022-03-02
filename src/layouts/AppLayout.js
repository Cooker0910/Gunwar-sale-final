import React, { Suspense, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-responsive-modal/styles.css';
import 'react-tabs/style/react-tabs.css';

// import Navigation from "../components/header/Navigation"
import Footer from '../components/footer/Footer';
import AppSpinner from '../components/loading/AppSpinner';
// import ContentLayout from './ContentLayout';
import NotFound from '../pages/error/NotFound';
import { innerRoutes } from "../routes/routes";
import styles from './AppLayout.module.css';

const AppLayout = (props) => {
  const { pathname } = useLocation();
  const { userId } = props;
  const [pageType, setPageType] = useState(-1);

  useEffect(() => {
    const includePage = (routes, path) => {
      return routes.filter((e) => {
        if (e.exact) {
          return e.path === path;
        } else {
          const words = e.path.split(':');
          if (words.length !== 2) {
            /// 404 page
            return false;
          }
          return path.startsWith(words[0]);
        }
      }).length > 0;
    }

    const getPageType = (path) => {
      if (includePage(innerRoutes, path)) {
        if (userId) {
          return 1;
        } else {
          return -1;
        }
      }
      return 0;
    }

    setPageType(getPageType(pathname));
  }, [pathname, userId]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className={styles.layout}>
      {/* <Navigation /> */}
      {(pageType === 0 &&
        <div className="app-min-height" style={{padding: "90px 0"}}>
          <Suspense fallback={<AppSpinner absolute />}>
            {props.children}
          </Suspense>
        </div>
      ) || (pageType === 1 &&
        // <ContentLayout>
        //   {props.children}
        // </ContentLayout>
        <></>
      ) ||
        <NotFound />
      }
      <Footer />
      <ToastContainer />
    </div>
  );
};


export default AppLayout;