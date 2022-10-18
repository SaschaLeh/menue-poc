import { Meta, moduleMetadata, Story } from '@storybook/angular';
import * as allIconsForStorybook from '../../../icons/generators/icon-components/dist/all-icons-for-storybook';
import { iconArrowRight } from '../../../icons/generators/icon-components/dist/icon-arrow-right';
import { IconCollectionModule } from '../../../icons/generators/icon-components/dist/icon-collection.module';
import { MenuItemComponent } from './menu-item.component';
import { MenuItemModule } from './menu-item.module';

export default {
    title: 'UI / Components / Menus / Menu / Menu Item',
    component: MenuItemComponent,
    decorators: [moduleMetadata({ imports: [MenuItemModule, IconCollectionModule] })],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        handleClick: { table: { disable: true } },
    },
} as Meta;

const template = `
<inno-menu-item>
    <inno-icon [icon]="icon"></inno-icon>
    <div>{{ text }}</div>
</inno-menu-item>`;

interface MenuItem {
    icon: string;
    text: string;
}

const Template: Story<any> = (props: MenuItem) => ({
    template,
    props,
});

export const Default = Template.bind({});
Default.args = {
    icon: iconArrowRight,
    text: 'Lorem ipsum',
};
Default.argTypes = {
    icon: {
        options: Object.keys(allIconsForStorybook),
        mapping: allIconsForStorybook,
        control: {
            type: 'select',
        },
    },
};
Default.parameters = {
    docs: {
        source: {
            code: template,
        },
    },
};
