import { memo, useCallback, useState } from 'react';
import { Grid, GridItem } from '@chakra-ui/react';

// Constants
import { OPTION_SETTING } from '@app/constants/setting';

// Assets
import { AvatarSetting } from '@app/assets/icons/AvatarSetting';
import { Faq } from '@app/assets/icons/Faq';

// Components
import ItemSideBarSetting from '@app/components/ItemSideBarSetting';
import UserForm from './Personal';
import FaqPage from './Faq';

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
        return <UserForm />;
      case OPTION_SETTING.FAQ_PAGE:
        return <FaqPage />;
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
          <AvatarSetting />
        </ItemSideBarSetting>

        <ItemSideBarSetting
          id={OPTION_SETTING.FAQ_PAGE}
          activeItemId={activeItemId}
          onClick={handleItemClick}
          title="FAQ"
          content="Frequently asked questions"
        >
          <Faq />
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
