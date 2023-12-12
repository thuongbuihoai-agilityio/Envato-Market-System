import { Suspense, lazy, memo, useCallback, useState } from 'react';
import { Grid, GridItem, Spinner } from '@chakra-ui/react';

// Constants
import { OPTION_SETTING } from '@app/constants/setting';

// Components
import ItemSideBarSetting from '@app/components/ItemSideBarSetting';

// Lazy loading components
const AvatarSetting = lazy(() =>
  import('@app/assets/icons/AvatarSetting').then((module) => ({
    default: module.AvatarSetting,
  })),
);

const Faq = lazy(() =>
  import('@app/assets/icons/Faq').then((module) => ({
    default: module.Faq,
  })),
);

const UserForm = lazy(() => import('@app/pages/Setting/Personal'));
const FaqPage = lazy(() => import('@app/pages/Setting/Faq'));

const SettingPage = () => {
  const [activeItemId, setActiveItemId] = useState<string>(
    OPTION_SETTING.USER_FORM,
  );

  const handleItemClick = useCallback(
    (id: string) => setActiveItemId(id),
    [activeItemId],
  );

  const renderPageContent = useCallback(() => {
    switch (activeItemId) {
      case OPTION_SETTING.USER_FORM:
        return (
          <Suspense fallback={<Spinner />}>
            <UserForm />
          </Suspense>
        );
      case OPTION_SETTING.FAQ_PAGE:
        return (
          <Suspense fallback={<Spinner />}>
            <FaqPage />
          </Suspense>
        );
      default:
        return null;
    }
  }, [activeItemId]);

  return (
    <Grid
      bg="background.body.quaternary"
      borderRadius="lg"
      gridTemplateColumns={{
        base: 'repeat(1,minmax(0,1fr))',
        xl: 'repeat(12,minmax(0,1fr))',
      }}
    >
      <GridItem colSpan={3}>
        <ItemSideBarSetting
          id={OPTION_SETTING.USER_FORM}
          activeItemId={activeItemId}
          onClick={handleItemClick}
          title="Personal Informations"
          content="Fill in your personal information"
        >
          <Suspense fallback={<Spinner />}>
            <AvatarSetting />
          </Suspense>
        </ItemSideBarSetting>

        <ItemSideBarSetting
          id={OPTION_SETTING.FAQ_PAGE}
          activeItemId={activeItemId}
          onClick={handleItemClick}
          title="FAQ"
          content="Frequently asked questions"
        >
          <Suspense fallback={<Spinner />}>
            <Faq />
          </Suspense>
        </ItemSideBarSetting>
      </GridItem>

      <GridItem colSpan={9} px={10} py={8}>
        {renderPageContent()}
      </GridItem>
    </Grid>
  );
};

const Setting = memo(SettingPage);
export default Setting;
