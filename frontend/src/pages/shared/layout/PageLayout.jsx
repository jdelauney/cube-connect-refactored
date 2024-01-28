import PageHeader from './PageHeader.jsx';
import PageContent from './PageContent.jsx';
import PageFooter from './PageFooter.jsx';
import MainPageHeader from './CustomLayout/MainPageHeader.jsx';
import MainPageFooter from './CustomLayout/MainPageFooter.jsx';
import PageSidebar from './PageSidebar.jsx';
import MainPageSidebar from './CustomLayout/MainPageSidebar.jsx';

const PageLayout = ({ children }) => {
  return (
    <div className={'flex flex-col'}>
      <PageHeader>
        <MainPageHeader />
      </PageHeader>
      <div className={'no-wrap flex min-h-full'}>
        <PageSidebar>
          <MainPageSidebar />
        </PageSidebar>
        <PageContent>{children}</PageContent>
      </div>
      <PageFooter>
        <MainPageFooter />
      </PageFooter>
    </div>
  );
};
export default PageLayout;
