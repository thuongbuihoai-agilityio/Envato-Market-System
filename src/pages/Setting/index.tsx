import { memo, useState } from 'react';
import { Grid, GridItem } from '@chakra-ui/react';

// Assets
import { AvatarSetting } from '@assets/icons/AvatarSetting';
import { Faq } from '@assets/icons/Faq';

// Components
import ItemSideBarSetting from '@components/ItemSideBarSetting';
import UserForm from './Personal';
import FaqPage from './Faq';

const SettingPage = () => {
  const [activeItemId, setActiveItemId] = useState<string | undefined>(
    undefined,
  );

  const handleItemClick = (id: string) => {
    setActiveItemId(id);
  };

  const renderPageContent = () => {
    switch (activeItemId) {
      case 'item1':
        return <UserForm />;
      case 'item2':
        return <FaqPage />;
      default:
        return null;
    }
  };

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
          id="item1"
          activeItemId={activeItemId}
          onClick={handleItemClick}
          title="Personal Informations"
          content="Fill in your personal information"
        >
          <AvatarSetting />
        </ItemSideBarSetting>

        <ItemSideBarSetting
          id="item2"
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
