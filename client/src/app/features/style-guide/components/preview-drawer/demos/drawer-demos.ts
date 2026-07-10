import { Component, Type, signal, linkedSignal, computed, inject } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Store as AppStore } from '@app-store';
import { SharedModule } from '@shared-module';
import { ButtonVariant } from 'primeng/button';

@Component({
    selector: 'empty-drawer',
    imports: [SharedModule],
    template: `
    <svg class="m-auto" width="40" height="40" viewBox="0 0 20 20" fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M15.5 4.8c2 3 1.7 7-1 9.7h0l4.3 4.3-4.3-4.3a7.8 7.8 0 01-9.8 1m-2.2-2.2A7.8 7.8 0 0113.2 2.4M2 18L18 2"></path></svg>
    <div class="flex flex-column align-items-center py-3">
        <div class="">
            <span class="uppercase">{{ selector() }}</span>
            <span class=""> drawer</span>
        </div>
        <div class="">
            <span class="">not found :(</span>
        </div>
    </div>
    `,
    host: { class: 'flex flex-column' }
})
export class EmptyDrawer {
    private readonly _appStore = inject(AppStore);
    readonly selector = computed(() => this._appStore.activeName());
}

@Component({
    selector: 'accordion-drawer',
    imports: [SharedModule],
    template: `
    <p-accordion value="0" class="w-full max-w-md">
        <p-accordion-panel value="0">
            <p-accordion-header>What is this service about?</p-accordion-header>
            <p-accordion-content>
                <p class="m-0 text-sm">This service helps you manage your projects more efficiently by offering real-time collaboration, task tracking, and powerful analytics.</p>
            </p-accordion-content>
        </p-accordion-panel>
        <p-accordion-panel value="1">
            <p-accordion-header>Is my data secure?</p-accordion-header>
            <p-accordion-content>
                <p class="m-0 text-sm">Yes. We use end-to-end encryption and follow industry best practices to ensure your data is protected. Your information is stored on secure servers and regularly backed up.</p>
            </p-accordion-content>
        </p-accordion-panel>
        <p-accordion-panel value="2">
            <p-accordion-header>Can I upgrade or downgrade my plan later?</p-accordion-header>
            <p-accordion-content>
                <p class="m-0 text-sm">Absolutely. You can change your subscription plan at any time from your account settings. Changes take effect immediately, and any billing adjustments are handled automatically.</p>
            </p-accordion-content>
        </p-accordion-panel>
    </p-accordion>
    `,
})
export class AccordionDrawer {
}

interface Command {
    label: string;
    shortcut: string;
}
interface Technology {
    label: string;
    value: string;
}
interface TechCategory {
    label: string;
    code: string;
    items: Technology[];
}
@Component({
    selector: 'autocomplete-drawer',
    imports: [SharedModule],
    template: `
    <div class="w-full">
        <div class="px-2"><span class="">Basic</span></div>
        <p-autocomplete [(ngModel)]="selectedCommand" [suggestions]="filteredCommands" (completeMethod)="searchBasic($event)" optionLabel="label" placeholder="Type a command..." class="w-full" inputStyleClass="w-full" scrollHeight="14rem" />
    </div>
    <div class="w-full">
        <div class="px-2"><span class="">Dropdown</span></div>
        <p-autocomplete [(ngModel)]="value" [dropdown]="true" [suggestions]="items" (completeMethod)="searchDropdown($event)" class="w-full" inputStyleClass="w-full" scrollHeight="14rem" />
    </div>
    <div class="w-full">
        <div class="px-2"><span class="">Group</span></div>
            <p-autocomplete
                [(ngModel)]="selectedTech"
                [group]="true"
                [suggestions]="filteredGroups"
                (completeMethod)="searchGroup($event)"
                optionLabel="label"
                optionGroupLabel="label"
                optionGroupChildren="items"
                placeholder="Search technologies..."
                class="w-full"
                inputStyleClass="w-full"
                scrollHeight="14rem"
            />
    </div>
    `,
    host: { class: 'flex flex-column gap-3 w-full' }
})
export class AutoCompleteDrawer {
    selectedCommand: Command | undefined;
    filteredCommands: Command[] = [];
    commands: Command[] = [
        { label: 'New File', shortcut: '⌘N' },
        { label: 'Open File', shortcut: '⌘O' },
        { label: 'Save', shortcut: '⌘S' },
        { label: 'Save As', shortcut: '⇧⌘S' },
        { label: 'Find', shortcut: '⌘F' },
        { label: 'Replace', shortcut: '⌘H' },
        { label: 'Go to Line', shortcut: '⌘G' },
        { label: 'Toggle Sidebar', shortcut: '⌘B' },
        { label: 'Split Editor', shortcut: '⌘\\' },
        { label: 'Close Tab', shortcut: '⌘W' }
    ];
    searchBasic(event: any) {
        const query = event.query.toLowerCase();
        this.filteredCommands = query ? this.commands.filter((cmd) => cmd.label.toLowerCase().includes(query)) : [...this.commands];
    }
    //
    items: string[] = [];
    value: any;
    searchDropdown(event: any) {
        this.items = event.query ? [...new Array(10).keys()].map((item) => event.query + '-' + item) : [...Array(10).keys()].map(String);
    }
    //
    selectedTech: any;
    filteredGroups: TechCategory[] = [];
    techStack: TechCategory[] = [
        {
            label: 'Frontend',
            code: 'FE',
            items: [
                { label: 'React', value: 'react' },
                { label: 'Vue', value: 'vue' },
                { label: 'Angular', value: 'angular' },
                { label: 'Svelte', value: 'svelte' }
            ]
        },
        {
            label: 'Backend',
            code: 'BE',
            items: [
                { label: 'Node.js', value: 'nodejs' },
                { label: 'Python', value: 'python' },
                { label: 'Java', value: 'java' },
                { label: 'Go', value: 'go' }
            ]
        },
        {
            label: 'Database',
            code: 'DB',
            items: [
                { label: 'PostgreSQL', value: 'postgresql' },
                { label: 'MongoDB', value: 'mongodb' },
                { label: 'Redis', value: 'redis' },
                { label: 'MySQL', value: 'mysql' }
            ]
        }
    ];
    searchGroup(event: any) {
        const query = event.query.toLowerCase();
        const filtered: TechCategory[] = [];
        for (const category of this.techStack) {
            const filteredItems = query ? category.items.filter((item) => item.label.toLowerCase().includes(query)) : category.items;

            if (filteredItems.length) {
                filtered.push({ ...category, items: filteredItems });
            }
        }
        this.filteredGroups = filtered;
    }
}

@Component({
    selector: 'avatar-drawer',
    imports: [SharedModule],
    template: `
    <div class="w-full">
        <div class="px-2"><span class="">Basic</span></div>
        <div class="flex items-center justify-center gap-4">
            <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" size="large" shape="circle" />
        </div>
    </div>
    <div class="w-full">
        <div class="px-2"><span class="">Image</span></div>
        <div class="flex items-center justify-center gap-4">
            <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" size="large" shape="circle" />
            <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/asiyajavayant.png" size="large" shape="circle" />
            <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png" size="large" shape="circle" />
        </div>
    </div>
    <div class="w-full">
        <div class="px-2"><span class="">Badge</span></div>
        <div class="flex items-center justify-center gap-8">
            <p-overlay-badge value="2" badgeSize="small" severity="success">
                <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png" size="large" shape="circle" />
            </p-overlay-badge>
            <p-overlay-badge severity="danger">
                <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/walter.jpg" size="large" />
            </p-overlay-badge>
        </div>
    </div>
    <div class="w-full">
        <div class="px-2"><span class="">Shape</span></div>
        <div class="flex items-center justify-center gap-4">
            <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/walter.jpg" shape="circle" size="large" />
            <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/walter.jpg" shape="square" size="large" />
        </div>
    </div>
    <div class="w-full">
        <div class="px-2"><span class="">Sizes</span></div>
        <div class="flex flex-column align-items-center gap-4">
            <div class="flex align-items-center justify-items-center gap-4">
                <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" shape="circle" />
                <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" shape="circle" size="large" />
                <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" shape="circle" size="xlarge" />
            </div>
            <div class="flex align-items-center justify-items-center gap-4">
                <p-avatar label="AB" shape="circle" />
                <p-avatar label="AB" shape="circle" size="large" />
                <p-avatar label="AB" shape="circle" size="xlarge" />
            </div>
        </div>
    </div>
    <div class="w-full">
        <div class="px-2"><span class="">AvatarGroup</span></div>
        <div class="flex justify-center">
            <p-avatar-group>
                <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" shape="circle" />
                <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/asiyajavayant.png" shape="circle" />
                <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png" shape="circle" />
                <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/ionibowcher.png" shape="circle" />
                <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/xuxuefeng.png" shape="circle" />
                <p-avatar label="+2" shape="circle" />
            </p-avatar-group>
        </div>
    </div>
    `,
    host: { class: 'flex flex-column gap-5' },
})
export class AvatarDrawer {
}

@Component({
    selector: 'badge-drawer',
    imports: [SharedModule],
    template: `
    <div class="w-full">
        <div class="px-2 pb-2"><span class="">Severity</span></div>
        <div class="flex flex-wrap gap-2 px-2">
            <p-badge value="2" />
            <p-badge value="6" severity="secondary" />
            <p-badge value="8" severity="success" />
            <p-badge value="4" severity="info" />
            <p-badge value="9" severity="warn" />
            <p-badge value="3" severity="danger" />
            <p-badge value="5" severity="contrast" />
        </div>
    </div>
    <div class="w-full">
        <div class="px-2 pb-2"><span class="">Size</span></div>
        <div class="flex gap-2 px-2">
            <p-badge value="8" badgeSize="xlarge" severity="success" />
            <p-badge value="6" badgeSize="large" severity="warn" />
            <p-badge value="4" severity="info" />
            <p-badge value="2" badgeSize="small" />
        </div>
    </div>
    <div class="w-full">
        <div class="px-2 pb-2"><span class="">Overlay</span></div>
        <div class="flex gap-3 px-2 pt-1">
            <p-overlay-badge value="2">
                <svg data-p-icon="bell" width="32" height="32"></svg>
            </p-overlay-badge>
            <p-overlay-badge value="4" severity="danger">
                <svg data-p-icon="calendar" width="32" height="32"></svg>
            </p-overlay-badge>
            <p-overlay-badge severity="danger">
                <svg data-p-icon="envelope" width="32" height="32"></svg>
            </p-overlay-badge>
        </div>
    </div>
    <div class="w-full">
        <div class="px-2 pb-2"><span class="">Button</span></div>
        <div class="flex justify-content-center gap-4 pb-2">
            <p-button label="Notifications" badge="2" />
            <p-button label="Inbox" badge="2" badgeSeverity="contrast" variant="outlined" />
        </div>
    </div>
    `,
    host: { class: 'flex flex-column gap-3 w-full' }
})
export class BadgeDrawer {
}

@Component({
    selector: 'blockui-drawer',
    imports: [SharedModule],
    template: `
    <div class="w-full">
        <div class="flex gap-2 mb-3">
            <p-button label="Block" severity="secondary" (onClick)="blockedPanel = true" />
            <p-button label="Unblock" severity="secondary" (onClick)="blockedPanel = false" />
        </div>
        <p-blockui [target]="pnl" [blocked]="blockedPanel" />
        <p-panel #pnl header="Header">
            <p class="m-0 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </p-panel>
    </div>
    `,
    host: { class: 'flex flex-column gap-3 w-full' }
})
export class BlockUiDrawer {
    blockedPanel = false;
}

@Component({
    selector: 'breadcrumb-drawer',
    imports: [SharedModule],
    template: `
    <div class="w-full">
        <div class="px-2"><span class="">Basic</span></div>
        <p-breadcrumb [model]="items" [home]="home" />
    </div>
    `,
    host: { class: 'flex flex-column gap-3 w-full' }
})
export class BreadcrumbDrawer {
    items: MenuItem[] = [{ label: 'Electronics' }, { label: 'Computer' }];
    home: MenuItem = { label: 'Home' };
}

@Component({
    selector: 'button-drawer',
    imports: [SharedModule],
    template: `
    <div class="w-full">
        <div class="flex align-items-center mb-2">
            <div class="flex align-items-center gap-2 w-6rem cursor-pointer">
                <p-checkbox [ngModel]="raised()" (ngModelChange)="raised.set(!raised())" class="" inputId="raised" [binary]="true" />
                <label pLabel for="raised"><span class="capitalize">raised</span></label>
            </div>
            <div class="flex align-items-center gap-2 w-6rem cursor-pointer">
                <p-checkbox [ngModel]="rounded()" (ngModelChange)="rounded.set(!rounded())" class="" inputId="rounded" [binary]="true" />
                <label pLabel for="rounded"><span class="capitalize">rounded</span></label>
            </div>
            <div class="flex align-items-center gap-2 w-6rem cursor-pointer">
                <p-checkbox [ngModel]="link()" (ngModelChange)="link.set(!link())" class="" inputId="link" [binary]="true" />
                <label pLabel for="link"><span class="capitalize">link</span></label>
            </div>
        </div>
        <div class="flex align-items-center mb-2">
            <div class="flex align-items-center gap-2 w-6rem cursor-pointer">
                <p-radiobutton [ngModel]="variant()" (ngModelChange)="variant.set(undefinedValue)" inputId="none" [value]="undefinedValue" />
                <label pLabel for="none"><span class="capitalize">none</span></label>
            </div>
            <div class="flex align-items-center gap-2 w-6rem cursor-pointer">
                <p-radiobutton [ngModel]="variant()" (ngModelChange)="variant.set('text')" inputId="text" value="text" />
                <label pLabel for="text"><span class="capitalize">text</span></label>
            </div>
            <div class="flex align-items-center gap-2 w-6rem cursor-pointer">
                <p-radiobutton [ngModel]="variant()" (ngModelChange)="variant.set('outlined')" inputId="outlined" value="outlined" />
                <label pLabel for="outlined"><span class="capitalize">outlined</span></label>
            </div>
        </div>
        <div class="flex align-items-center mb-4">
            <div class="flex align-items-center gap-2 cursor-pointer">
                <p-checkbox [ngModel]="isDisabeld()" (ngModelChange)="isDisabeld.set(!isDisabeld())" class="" inputId="isDisabeld" [binary]="true" />
                <label pLabel for="isDisabeld"><span class="capitalize">Set as disabled</span></label>
            </div>
        </div>
        <div class="flex flex-wrap justify-content-center gap-2 mb-3">
            @for (button of buttons(); track $index) {
                <button pButton [severity]="$any(button.severity)" class="w-6rem"
                    [raised]="raised()"
                    [rounded]="rounded()"
                    [link]="link()"
                    [variant]="variant()"
                    [disabled]="isDisabeld()"
                    >
                    <svg [pIcon]="button.icon"></svg>
                    <span class="capitalize">{{ button.label }}</span>
                </button>
            }
        </div>
        <div class="flex flex-wrap justify-content-center column-gap-5 row-gap-2">
            @for (button of buttons(); track $index) {
                <button pButton iconOnly  [severity]="$any(button.severity)" class=""
                    [raised]="raised()"
                    [rounded]="rounded()"
                    [link]="link()"
                    [variant]="variant()"
                    [disabled]="isDisabeld()"
                    >
                    <svg [pIcon]="button.icon"></svg>
                </button>
            }
        </div>
    </div>
    <div class="w-full mb-4">
        <div class="px-2 pb-2"><span class="">Button Group</span></div>
        <div class="flex justify-content-center">
            <p-buttongroup>
                <button pButton><svg data-p-icon="check"></svg> Save</button>
                <button pButton><svg data-p-icon="trash"></svg> Delete</button>
                <button pButton><svg data-p-icon="times"></svg> Cancel</button>
            </p-buttongroup>
        </div>
    </div>
    <div class="w-full mb-4">
        <div class="px-2 pb-2"><span class="">Badge</span></div>
        <div class="flex justify-content-center gap-2">
            <button pButton>Emails <p-badge severity="secondary" shape="circle" value="2" /></button>
            <button pButton variant="outlined"><svg data-p-icon="users"></svg> Messages <p-badge severity="contrast" shape="circle" value="2" /></button>
            <p-overlay-badge>
                <button pButton variant="outlined" iconOnly><svg data-p-icon="bell"></svg></button>
                <p-badge severity="info" class="animate-pulse" />
            </p-overlay-badge>
        </div>
    </div>
    <div class="w-full mb-4">
        <div class="px-2 pb-2"><span class="">Sizes</span></div>
        <div class="flex justify-content-center gap-2">
            <div class=""><button pButton size="small"><svg data-p-icon="check"></svg> Small</button></div>
            <div class=""><button pButton><svg data-p-icon="check"></svg> Normal</button></div>
            <div class=""><button pButton size="large"><svg data-p-icon="check"></svg> Large</button></div>
        </div>
    </div>
    `,
    host: { class: 'flex flex-column gap-3 w-full' }
})
export class ButtonDrawer {
    readonly undefinedValue = undefined;
    readonly raised = signal(false);
    readonly rounded = signal(false);
    readonly link = signal(false);
    readonly variant = signal<ButtonVariant | undefined>(this.undefinedValue);
    readonly isDisabeld = signal(false);
    readonly buttons = signal([
        { label: 'primary', severity: 'normal', icon: "check" },
        { label: 'secondary', severity: 'secondary', icon: "check" },
        { label: 'success', severity: 'success', icon: "check" },
        { label: 'info', severity: 'info', icon: "check" },
        { label: 'warn', severity: 'warn', icon: "check" },
        { label: 'help', severity: 'help', icon: "check" },
        { label: 'danger', severity: 'danger', icon: "check" },
        { label: 'contrast', severity: 'contrast', icon: "check" },
    ]);
}

@Component({
    selector: 'card-drawer',
    imports: [SharedModule],
    template: `
    <div class="w-full">
        <div class="px-2"><span class="">Basic</span></div>
        <p-card header="Simple Card">
            <p class="m-0 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
            </p>
        </p-card>
    </div>
    <div class="w-full">
        <div class="px-2"><span class="">Advanced</span></div>
        <p-card class="overflow-hidden">
            <ng-template #header>
                <img alt="Card" class="w-full" src="https://primefaces.org/cdn/primeng/images/card-ng.jpg" />
            </ng-template>
            <ng-template #title> Advanced Card </ng-template>
            <ng-template #subtitle> Card subtitle </ng-template>
            <p class="m-0 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
            </p>
            <ng-template #footer>
                <div class="flex gap-3 mt-1">
                    <p-button label="Cancel" severity="secondary" variant="outlined" class="w-full" styleClass="w-full" />
                    <p-button label="Save" class="w-full" styleClass="w-full" />
                </div>
            </ng-template>
        </p-card>
    </div>
    `,
    host: { class: 'flex flex-column gap-3 w-full' }
})
export class CardDrawer {
}

interface CarouselProduct {
    name: string;
    image: string;
    price: number;
    inventoryStatus: string;
}
@Component({
    selector: 'carousel-drawer',
    imports: [SharedModule],
    template: `
    <div class="w-full">
        <div class="px-2"><span class="">Basic</span></div>
        <p-carousel [value]="products" [numVisible]="1" [numScroll]="1" [circular]="true">
            <ng-template let-product #item>
                <div class="border-1 surface-border border-round m-2 p-3">
                    <div class="mb-3">
                        <img [src]="'https://primefaces.org/cdn/primeng/images/demo/product/' + product.image" [alt]="product.name" class="w-full border-round" />
                    </div>
                    <div class="mb-3 flex justify-content-between align-items-center">
                        <span class="font-medium">{{ product.name }}</span>
                        <p-tag [value]="product.inventoryStatus" [severity]="getSeverity(product.inventoryStatus)" />
                    </div>
                    <div class="flex justify-content-between align-items-center">
                        <span class="font-semibold text-xl">{{ '$' + product.price }}</span>
                        <span class="flex gap-2">
                            <p-button severity="secondary" variant="outlined"><svg data-p-icon="heart"></svg></p-button>
                            <p-button><svg data-p-icon="shopping-cart"></svg></p-button>
                        </span>
                    </div>
                </div>
            </ng-template>
        </p-carousel>
    </div>
    `,
    host: { class: 'flex flex-column gap-3 w-full' }
})
export class CarouselDrawer {
    products: CarouselProduct[] = [
        { name: 'Bamboo Watch', image: 'bamboo-watch.jpg', price: 65, inventoryStatus: 'INSTOCK' },
        { name: 'Black Watch', image: 'black-watch.jpg', price: 72, inventoryStatus: 'OUTOFSTOCK' },
        { name: 'Blue Band', image: 'blue-band.jpg', price: 79, inventoryStatus: 'LOWSTOCK' },
        { name: 'Blue T-Shirt', image: 'blue-t-shirt.jpg', price: 29, inventoryStatus: 'INSTOCK' },
    ];
    getSeverity(status: string) {
        switch (status) {
            case 'OUTOFSTOCK': return 'danger';
            case 'LOWSTOCK': return 'warn';
            default: return 'success';
        }
    }
}

@Component({
    selector: 'cascadeselect-drawer',
    imports: [SharedModule],
    template: `
    <div class="w-full">
        <div class="px-2"><span class="">Basic</span></div>
        <!-- $any: в primeng 22.0.4 options ошибочно типизирован как string | string[] -->
        <p-cascadeselect [(ngModel)]="selectedCity" [options]="$any(countries)" optionLabel="cname" optionGroupLabel="name"
            [optionGroupChildren]="['states', 'cities']" placeholder="Select a City" class="w-full" styleClass="w-full" appendTo="body" />
    </div>
    `,
    host: { class: 'flex flex-column gap-3 w-full' }
})
export class CascadeSelectDrawer {
    selectedCity: any;
    countries = [
        {
            name: 'Australia',
            code: 'AU',
            states: [
                {
                    name: 'New South Wales',
                    cities: [
                        { cname: 'Sydney', code: 'A-SY' },
                        { cname: 'Newcastle', code: 'A-NE' },
                        { cname: 'Wollongong', code: 'A-WO' },
                    ]
                },
                {
                    name: 'Queensland',
                    cities: [
                        { cname: 'Brisbane', code: 'A-BR' },
                        { cname: 'Townsville', code: 'A-TO' },
                    ]
                },
            ]
        },
        {
            name: 'United States',
            code: 'US',
            states: [
                {
                    name: 'California',
                    cities: [
                        { cname: 'Los Angeles', code: 'US-LA' },
                        { cname: 'San Diego', code: 'US-SD' },
                        { cname: 'San Francisco', code: 'US-SF' },
                    ]
                },
                {
                    name: 'Florida',
                    cities: [
                        { cname: 'Jacksonville', code: 'US-JA' },
                        { cname: 'Miami', code: 'US-MI' },
                        { cname: 'Orlando', code: 'US-OR' },
                    ]
                },
            ]
        },
    ];
}

interface CheckboxCategory {
    name: string;
    key: string;
    isReadonly: boolean;
    isDisabled: boolean;
    isInvalid: boolean;
}
@Component({
    selector: 'checkbox-drawer',
    imports: [SharedModule],
    template: `
    <div class="w-full">
        <div class="flex flex-column gap-3 mb-4">
            @for (category of categories; track category.key) {
                <div class="flex align-items-center">
                    <p-checkbox
                        [inputId]="category.key" name="group" [value]="category" [(ngModel)]="selectedCategories"
                        [invalid]="category.isInvalid"
                        [readonly]="category.isReadonly"
                        [disabled]="category.isDisabled" />
                    <label [for]="category.key" class="ml-2" [class.text-red-500]="category.isInvalid">{{ category.name }}</label>
                </div>
            }
        </div>
    </div>
    <div class="w-full">
        <div class="px-2 pb-2"><span class="">Sizes</span></div>
        <div class="flex gap-3">
            <div class="flex align-items-center gap-2">
                <p-checkbox [binary]="true" inputId="small-checkbox" size="small" />
                <label pLabel for="small-checkbox" class="text-sm">Small</label>
            </div>
            <div class="flex align-items-center gap-2">
                <p-checkbox [binary]="true" inputId="normal-checkbox" />
                <label pLabel for="normal-checkbox" class="text-sm">Normal</label>
            </div>
            <div class="flex align-items-center gap-2">
                <p-checkbox [binary]="true" inputId="large-checkbox" size="large" />
                <label pLabel for="large-checkbox" class="text-sm">Large</label>
            </div>
        </div>
    </div>
    `,
    host: { class: 'flex flex-column gap-3 w-full' }
})
export class CheckboxDrawer {
    categories: CheckboxCategory[] = [
        { name: 'Accounting', key: 'A', isReadonly: false, isInvalid: false, isDisabled: false },
        { name: 'Marketing', key: 'M', isReadonly: false, isInvalid: false, isDisabled: false },
        { name: 'Production', key: 'P', isReadonly: false, isInvalid: false, isDisabled: false },
        { name: 'Research', key: 'R', isReadonly: false, isInvalid: false, isDisabled: false },
        { name: 'Readonly CheckBox', key: 'RO', isReadonly: true, isInvalid: false, isDisabled: false },
        { name: 'Readonly CheckBox (Checked)', key: 'ROC', isReadonly: true, isInvalid: false, isDisabled: false },
        { name: 'Disabled CheckBox', key: 'D', isReadonly: false, isInvalid: false, isDisabled: true },
        { name: 'Disabled CheckBox (Checked)', key: 'DC', isReadonly: false, isInvalid: false, isDisabled: true },
        { name: 'Invalid CheckBox', key: 'I', isReadonly: true, isInvalid: true, isDisabled: false },
    ];
    selectedCategories: CheckboxCategory[] = [this.categories[1], this.categories[5], this.categories[7]];
}

@Component({
    selector: 'chip-drawer',
    imports: [SharedModule],
    template: `
    <div class="w-full">
        <div class="px-2"><span class="">Basic</span></div>
        <div class="flex align-items-center flex-wrap gap-2">
            <p-chip label="Action" />
            <p-chip label="Comedy" />
            <p-chip label="Mystery" />
            <p-chip label="Thriller" [removable]="true" />
        </div>
    </div>
    <div class="w-full">
        <div class="px-2"><span class="">Image</span></div>
        <div class="flex align-items-center flex-wrap gap-2">
            <p-chip label="Amy Elsner" image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" alt="Avatar image" />
            <p-chip label="Asiya Javayant" image="https://primefaces.org/cdn/primeng/images/demo/avatar/asiyajavayant.png" alt="Avatar image" />
            <p-chip label="Onyama Limba" image="https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png" alt="Avatar image" />
            <p-chip label="Xuxue Feng" image="https://primefaces.org/cdn/primeng/images/demo/avatar/xuxuefeng.png" alt="Avatar image" [removable]="true" />
        </div>
    </div>
    `,
    host: { class: 'flex flex-column gap-3 w-full' }
})
export class ChipDrawer {
}

@Component({
    selector: 'inputcolor-drawer',
    imports: [SharedModule],
    template: `
    <div class="w-full">
        <p-inputcolor [(ngModel)]="color" [format]="activeFormat" class="max-w-xs mx-auto space-y-3">
            <p-inputcolor-area class="mb-2">
                <p-inputcolor-area-background />
                <p-inputcolor-area-handle />
            </p-inputcolor-area>
            <div class="flex align-items-center gap-2">
                <div class="flex flex-column gap-1 space-y-1 mr-1 w-full">
                    <p-inputcolor-slider>
                        <p-inputcolor-transparency-grid />
                        <p-inputcolor-slider-track />
                        <p-inputcolor-slider-handle />
                    </p-inputcolor-slider>
                    <p-inputcolor-slider channel="alpha">
                        <p-inputcolor-transparency-grid />
                        <p-inputcolor-slider-track />
                        <p-inputcolor-slider-handle />
                    </p-inputcolor-slider>
                </div>
                <p-inputcolor-swatch class="fix-size-2rem">
                    <p-inputcolor-transparency-grid />
                    <p-inputcolor-swatch-background />
                </p-inputcolor-swatch>
                <p-inputcolor-eyedropper [iconOnly]="true" [outlined]="true" severity="secondary" class="pointer-events-none">
                    <svg data-p-icon="eye-dropper"></svg>
                </p-inputcolor-eyedropper>
            </div>
        </p-inputcolor>
    </div>
    <div class="w-full">
        <div class="px-2 pb-2"><span class=""></span></div>
        <!--  -->
    </div>
    `,
    host: { class: 'flex flex-column gap-3' },
})
export class ColorPickerDrawer {
    color: string = '#276def';
    format: string = 'hex';
    formatOptions = [
        { label: 'HEX', value: 'hex' },
        { label: 'RGBA', value: 'rgba' },
        { label: 'HSBA', value: 'hsba' },
        { label: 'HSLA', value: 'hsla' },
        { label: 'OKLCHA', value: 'oklcha' }
    ];
    get activeFormat(): any {
        return this.format === 'hex' ? 'rgba' : this.format === 'oklcha' ? 'oklch' : this.format;  // nosonar (it will need to be repaired)
    }
}
@Component({
    selector: 'dialog-drawer',
    imports: [SharedModule],
    template: `
    <div class="w-full">
        <div class="p-component p-confirmdialog p-dialog static flex flex-column">
            <span class="p-hidden-accessible p-hidden-focusable" tabindex="0" role="presentation" aria-hidden="true" data-p-hidden-accessible="true" data-p-hidden-focusable="true" data-pc-section="firstfocusableelement"></span>
            <div class="p-resizable-handle" data-pc-section="resizehandle" style="z-index: 90;"></div>
            <div class="p-dialog-header" data-pc-section="header">
                <span class="p-dialog-title">Dialog Title</span>
                <div class="p-dialog-header-actions">
                    <button type="button" icononly="" class="p-ripple p-dialog-close-button p-button p-button-icon-only p-button-rounded p-button-secondary p-button-text p-component" tabindex="0">
                        <svg data-p-icon="times"></svg>
                    </button>
                </div>
            </div>
            <div class="p-dialog-content h-8rem">
                <i class="p-confirmdialog-icon"><svg data-p-icon="star" [size]="'var(--p-confirmdialog-icon-size)'"></svg></i>
                <span class="p-confirmdialog-message">Are you sure that you want to proceed?</span>
            </div>
            <div class="p-dialog-footer" >
                <button type="button" class="p-ripple p-confirmdialog-reject-button p-button p-button-secondary p-component">Cancel</button>
                <button type="button" class="p-ripple p-confirmdialog-accept-button p-button p-component">Save</button>
            </div>
            <span class="p-hidden-accessible p-hidden-focusable" tabindex="0" role="presentation" aria-hidden="true" data-p-hidden-accessible="true" data-p-hidden-focusable="true" data-pc-section="lastfocusableelement"></span>
        </div>
    </div>
    `,
    host: { class: 'flex flex-column gap-3' },
})
export class DialogDrawer {
}
@Component({
    selector: 'test-drawer',
    imports: [SharedModule],
    template: `
    <div class="w-full">
        <div class="px-2 pb-2"><span class=""></span></div>
        <!--  -->
    </div>
    `,
    host: { class: 'flex flex-column gap-3' },
})
export class TestDrawer {
}

@Component({
    selector: 'input-text-drawer',
    imports: [SharedModule],
    template: `
        @let value1 = 'Value1';
        <input pInputText [value]="value1" />
    `,
})
export class InputTextDrawer {
}

/** Демо-контент drawer'а по имени компонента (COMPONENT_ITEMS.name). */
export interface IDrawerDemo {
    readonly header: string;
    readonly component: Type<unknown>;
    readonly styleClass?: string;
}
// export const DRAWER_DEMOS: Record<string, Type<unknown>> = {
export const DRAWER_DEMOS: Record<string, IDrawerDemo> = {
    empty: { component: EmptyDrawer, header: 'Empty Drawer', styleClass: 'flex justify-content-center align-items-center' },
    accordion: { component: AccordionDrawer, header: 'Accordion', },
    autocomplete: { component: AutoCompleteDrawer, header: 'Autocomplete', },
    avatar: { component: AvatarDrawer, header: 'Avatar', },
    badge: { component: BadgeDrawer, header: 'Badge', },
    blockui: { component: BlockUiDrawer, header: 'BlockUI', },
    breadcrumb: { component: BreadcrumbDrawer, header: 'Breadcrumb', },
    button: { component: ButtonDrawer, header: 'Button', },
    card: { component: CardDrawer, header: 'Card', },
    carousel: { component: CarouselDrawer, header: 'Carousel', },
    cascadeselect: { component: CascadeSelectDrawer, header: 'CascadeSelect', },
    checkbox: { component: CheckboxDrawer, header: 'Checkbox', },
    chip: { component: ChipDrawer, header: 'Chip', },
    confirmdialog: { component: DialogDrawer, header: 'Confirm Dialog Drawer', styleClass: 'p-dialog-mask p-overlay-mask static p-2' },
    dynamicdialog: { component: DialogDrawer, header: 'Dialog Drawer', styleClass: 'p-dialog-mask p-overlay-mask static p-2' },
    inputcolor: { component: ColorPickerDrawer, header: 'InputColor', },
    //
    inputtext: { component: InputTextDrawer, header: 'Input Text', },
};
