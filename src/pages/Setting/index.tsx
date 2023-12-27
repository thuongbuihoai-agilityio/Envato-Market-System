import { ReactElement, lazy, memo, useCallback, useState } from 'react';
import { Grid, GridItem } from '@chakra-ui/react';

// Constants
import { OPTION_SETTING } from '@app/constants/setting';

// Components
import { ItemSideBarSetting, Lazy } from '@app/components';

// HOCs
import { withErrorBoundary } from '@app/hocs/withErrorBoundary';

// Lazy loading components
const AvatarSetting = lazy(() =>
  import('@app/components/Icons/AvatarSetting').then((module) => ({
    default: module.AvatarSetting,
  })),
);

const Faq = lazy(() =>
  import('@app/components/Icons/Faq').then((module) => ({
    default: module.Faq,
  })),
);

const UserForm = lazy(() => import('@app/pages/Setting/Personal'));
const FaqPage = lazy(() => import('@app/pages/Setting/Faq'));

const SettingPage = () => {
  const [activeItemId, setActiveItemId] = useState<string>(
    OPTION_SETTING.USER_FORM,
  );

  const pages: Record<string, ReactElement> = {
    [OPTION_SETTING.USER_FORM]: <UserForm />,
    [OPTION_SETTING.FAQ_PAGE]: <FaqPage />,
  };

  const handleItemClick = useCallback((id: string) => setActiveItemId(id), []);

  return (
    <Grid
      bg="background.body.primary"
      borderRadius="lg"
      gridTemplateColumns={{
        base: 'repeat(1,minmax(0,1fr))',
        xl: 'repeat(12,minmax(0,1fr))',
      }}
      px={{ base: 6, md: 12 }}
      py={12}
    >
      <GridItem px={4} py={6} colSpan={3} bg="background.body.quaternary">
        <ItemSideBarSetting
          id={OPTION_SETTING.USER_FORM}
          activeItemId={activeItemId}
          onClick={handleItemClick}
          title="Personal Informations"
          content="Fill in your personal information"
        >
          <Lazy>
            <AvatarSetting />
          </Lazy>
        </ItemSideBarSetting>

        <ItemSideBarSetting
          id={OPTION_SETTING.FAQ_PAGE}
          activeItemId={activeItemId}
          onClick={handleItemClick}
          title="FAQ"
          content="Frequently asked questions"
        >
          <Lazy>
            <Faq />
          </Lazy>
        </ItemSideBarSetting>
      </GridItem>

      <GridItem colSpan={9} px={10} py={8} bg="background.body.quaternary">
        <Lazy>{pages[activeItemId]}</Lazy>
      </GridItem>
    </Grid>
  );
};

const Setting = memo(withErrorBoundary(SettingPage));
export default Setting;
