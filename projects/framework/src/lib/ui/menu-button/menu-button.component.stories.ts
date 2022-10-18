import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { IconCollectionModule } from '../../icons/generators/icon-components/dist/icon-collection.module';
import { IconButtonModule } from '../icon-button/icon-button.module';
import { MenuButtonComponent } from './menu-button.component';
import { MenuButtonModule } from './menu-button.module';

export default {
    title: 'UI / Components / Buttons / Menu Button',
    component: MenuButtonComponent,
    decorators: [
        moduleMetadata({
            imports: [MenuButtonModule, IconCollectionModule, IconButtonModule],
        }),
    ],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        isOpenChange: { table: { disable: true } },
    },
} as Meta;

const template = `
<inno-menu-button [isOpen]="isOpen">
    <inno-icon-button (click)="isOpen = !isOpen">
         <inno-icon-navigation-menu-vertical size="small"></inno-icon-navigation-menu-vertical>
    </inno-icon-button>
    <inno-menu-button-menu>
        <a>Eintrag 1</a>
        <a>Eintrag 2</a>
        <a>Eintrag 3</a>
    </inno-menu-button-menu>
</inno-menu-button>
`;

const Template: Story<MenuButtonComponent> = (props: MenuButtonComponent) => ({
    props,
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
