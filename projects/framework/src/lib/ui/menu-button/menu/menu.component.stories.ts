import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { MenuButtonModule } from '../menu-button.module';
import { MenuButtonMenuComponent } from './menu.component';

export default {
    title: 'UI / Components / Buttons / Menu Button / Menu',
    component: MenuButtonMenuComponent,
    decorators: [
        moduleMetadata({
            imports: [MenuButtonModule],
        }),
    ],
    parameters: {
        layout: 'centered',
    },
} as Meta;

const template = `
<inno-menu-button-menu>
    <a>Eintrag 1</a>
    <a>Eintrag 2</a>
    <a>Eintrag 3</a>
</inno-menu-button-menu>
`;

const Template: Story<MenuButtonMenuComponent> = () => ({
    template,
});

export const Default = Template.bind({});
Default.args = {
    isOpen: false,
};
Default.parameters = {
    docs: {
        source: {
            code: template,
        },
    },
};
