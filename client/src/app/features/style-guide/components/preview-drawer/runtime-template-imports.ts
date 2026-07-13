import { Type } from '@angular/core';
// form
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import { InputText } from 'primeng/inputtext';
import { InputNumber } from 'primeng/inputnumber';
import { InputColor } from 'primeng/inputcolor'; // p-colorpicker deprecated → InputColor
import { Textarea } from 'primeng/textarea';
import { Select } from 'primeng/select';         // p-multiselect deprecated → Select с multiple
import { DatePicker } from 'primeng/datepicker';
import { Checkbox } from 'primeng/checkbox';
import { RadioButton } from 'primeng/radiobutton';
import { SelectButton } from 'primeng/selectbutton';
import { ToggleSwitch } from 'primeng/toggleswitch';
// button
import { ButtonDirective } from 'primeng/button';
import { ButtonGroup } from 'primeng/buttongroup';
// panel
import { Accordion, AccordionContent, AccordionHeader, AccordionPanel } from 'primeng/accordion';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from 'primeng/tabs';
// media
import { Carousel, CarouselContent, CarouselIndicator, CarouselIndicators, CarouselItem, CarouselNext, CarouselPrev } from 'primeng/carousel';
// menu
import { Menu } from 'primeng/menu';
import { ContextMenu } from 'primeng/contextmenu';
// overlay
import { Dialog } from 'primeng/dialog';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { Popover } from 'primeng/popover';
import { Tooltip } from 'primeng/tooltip';
// misc
import { ProgressSpinner } from 'primeng/progressspinner';
import { Toast } from 'primeng/toast';
import { Tag } from 'primeng/tag';
import { Chip } from 'primeng/chip';
import { Badge } from 'primeng/badge';
import { OverlayBadge } from 'primeng/overlaybadge';
import { Label } from 'primeng/label';
// icons: PIcon — динамический [pIcon]; статический data-p-icon="x" требует класс каждой иконки
import { PIcon } from '@primeicons/angular/p-icon';
import { Bell } from '@primeicons/angular/bell';
import { Check } from '@primeicons/angular/check';
import { Star } from '@primeicons/angular/star';
import { Times } from '@primeicons/angular/times';
import { Trash } from '@primeicons/angular/trash';
import { Users } from '@primeicons/angular/users';
//
import { DModel } from './directives/d-model';

/**
 * Импорты для JIT-компилируемых шаблонов (.drawer.json и т.п.).
 *
 * ТОЛЬКО standalone-компоненты/директивы: NgModule здесь не работают — при AOT-сборке
 * их рантайм-скоупы (ɵɵsetNgModuleScope) вырезаются из бандла (CLI жёстко ставит
 * ngJitMode=false поверх пользовательского define), и JIT-компонент получает пустой скоуп.
 *
 * Двустороннее связывание в шаблонах — [(dModel)], не [(ngModel)] (NgModel не standalone).
 * Иконки — динамически через [pIcon]="'name'" (статический data-p-icon требует импорта
 * каждой иконки отдельно).
 *
 * Упразднённое в PrimeNG 22 сознательно не включено:
 * - p-button / pButtonLabel / pButtonIcon → [pButton] с проекцией контента;
 * - p-multiselect → p-select с multiple;
 * - p-colorpicker → p-inputcolor;
 * - старый API carousel ([value] + шаблон) → композиция p-carousel-content / p-carousel-item...;
 * - DynamicDialog в шаблонах не используется (открывается сервисом DialogService из кода).
 *
 * Новый компонент в шаблонах → добавьте его standalone-класс сюда.
 */
export const RUNTIME_TEMPLATE_IMPORTS: Type<unknown>[] = [
    DModel,
    PIcon,
    Bell, Check, Star, Times, Trash, Users,
    // form
    IconField, InputIcon,
    InputText,
    InputNumber,
    InputColor,
    Textarea,
    Select,
    DatePicker,
    Checkbox,
    RadioButton,
    SelectButton,
    ToggleSwitch,
    // button
    ButtonDirective,
    ButtonGroup,
    // panel
    Accordion, AccordionPanel, AccordionHeader, AccordionContent,
    Tabs, TabList, Tab, TabPanels, TabPanel,
    // media
    Carousel, CarouselContent, CarouselItem, CarouselIndicators, CarouselIndicator, CarouselPrev, CarouselNext,
    // menu
    Menu,
    ContextMenu,
    // overlay
    Dialog,
    ConfirmDialog,
    Popover,
    Tooltip,
    // misc
    ProgressSpinner,
    Toast,
    Tag,
    Chip,
    Badge,
    OverlayBadge,
    Label,
];
