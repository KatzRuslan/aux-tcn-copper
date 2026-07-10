import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgTemplateOutlet } from '@angular/common';
//
// PrimeNG modules
// Form
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { CheckboxModule } from 'primeng/checkbox';
import { DatePickerModule } from 'primeng/datepicker';
import { FloatLabelModule } from 'primeng/floatlabel';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { IftaLabelModule } from 'primeng/iftalabel';
import { InputColorModule } from 'primeng/inputcolor';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputOtpModule } from 'primeng/inputotp';
import { InputPasswordModule } from 'primeng/inputpassword';
import { InputTagsModule } from 'primeng/inputtags';
import { InputTextModule } from 'primeng/inputtext';
import { KeyFilterModule } from 'primeng/keyfilter';
import { KnobModule } from 'primeng/knob';
import { LabelModule } from 'primeng/label';
import { ListboxModule } from 'primeng/listbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { SelectModule } from 'primeng/select';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SliderModule } from 'primeng/slider';
import { TextareaModule } from 'primeng/textarea';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { TreeSelectModule } from 'primeng/treeselect';
// Button
import { ButtonModule } from 'primeng/button';
import { ButtonGroupModule } from 'primeng/buttongroup';
import { SpeedDialModule } from 'primeng/speeddial';
import { SplitButtonModule } from 'primeng/splitbutton';
// Data
import { DataViewModule } from 'primeng/dataview';
import { OrderListModule } from 'primeng/orderlist';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { PaginatorModule } from 'primeng/paginator';
import { PickListModule } from 'primeng/picklist';
import { TableModule } from 'primeng/table';
import { TimelineModule } from 'primeng/timeline';
import { TreeModule } from 'primeng/tree';
import { TreeTableModule } from 'primeng/treetable';
import { ScrollerModule } from 'primeng/scroller';
// Panel
import { AccordionModule } from 'primeng/accordion';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';
import { ScrollAreaModule } from 'primeng/scrollarea';
import { SplitterModule } from 'primeng/splitter';
import { StepperModule } from 'primeng/stepper';
import { TabsModule } from 'primeng/tabs';
import { ToolbarModule } from 'primeng/toolbar';
// Overlay
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { DialogModule } from 'primeng/dialog';
import { DrawerModule } from 'primeng/drawer';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { PopoverModule } from 'primeng/popover';
import { TooltipModule } from 'primeng/tooltip';
// File
import { FileUploadModule } from 'primeng/fileupload';
// Menu
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { CommandMenuModule } from 'primeng/commandmenu';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DockModule } from 'primeng/dock';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { SidebarModule } from 'primeng/sidebar';
import { TieredMenuModule } from 'primeng/tieredmenu';
// Messages
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
// Media
import { CarouselModule } from 'primeng/carousel';
import { CompareModule } from 'primeng/compare';
import { GalleryModule } from 'primeng/gallery';
// Misc
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { AutoFocusModule } from 'primeng/autofocus';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { BadgeModule } from 'primeng/badge';
import { OverlayBadgeModule } from 'primeng/overlaybadge';
import { BindModule } from 'primeng/bind';
import { BlockUIModule } from 'primeng/blockui';
import { ChipModule } from 'primeng/chip';
import { ClassNamesModule } from 'primeng/classnames';
import { FluidModule } from 'primeng/fluid';
import { FocusTrapModule } from 'primeng/focustrap';
import { InplaceModule } from 'primeng/inplace';
import { MeterGroupModule } from 'primeng/metergroup';
import { ProgressBarModule } from 'primeng/progressbar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RippleModule } from 'primeng/ripple';
import { ScrollTopModule } from 'primeng/scrolltop';
import { SkeletonModule } from 'primeng/skeleton';
import { StyleClassModule } from 'primeng/styleclass';
import { TagModule } from 'primeng/tag';
import { TerminalModule } from 'primeng/terminal';
//
// Icons — sorted alphabetically
import { PIcon } from '@primeicons/angular/p-icon';
import { AddressBook } from '@primeicons/angular/address-book';
import { AlignCenter } from '@primeicons/angular/align-center';
import { AlignJustify } from '@primeicons/angular/align-justify';
import { AlignLeft } from '@primeicons/angular/align-left';
import { AlignRight } from '@primeicons/angular/align-right';
import { Amazon } from '@primeicons/angular/amazon';
import { Android } from '@primeicons/angular/android';
import { AngleDoubleDown } from '@primeicons/angular/angle-double-down';
import { AngleDoubleLeft } from '@primeicons/angular/angle-double-left';
import { AngleDoubleRight } from '@primeicons/angular/angle-double-right';
import { AngleDoubleUp } from '@primeicons/angular/angle-double-up';
import { AngleDown } from '@primeicons/angular/angle-down';
import { AngleLeft } from '@primeicons/angular/angle-left';
import { AngleRight } from '@primeicons/angular/angle-right';
import { AngleUp } from '@primeicons/angular/angle-up';
import { Apple } from '@primeicons/angular/apple';
import { ArrowCircleDown } from '@primeicons/angular/arrow-circle-down';
import { ArrowCircleLeft } from '@primeicons/angular/arrow-circle-left';
import { ArrowCircleRight } from '@primeicons/angular/arrow-circle-right';
import { ArrowCircleUp } from '@primeicons/angular/arrow-circle-up';
import { ArrowDown } from '@primeicons/angular/arrow-down';
import { ArrowDownLeft } from '@primeicons/angular/arrow-down-left';
import { ArrowDownLeftAndArrowUpRightToCenter } from '@primeicons/angular/arrow-down-left-and-arrow-up-right-to-center';
import { ArrowDownRight } from '@primeicons/angular/arrow-down-right';
import { ArrowLeft } from '@primeicons/angular/arrow-left';
import { ArrowRight } from '@primeicons/angular/arrow-right';
import { ArrowRightArrowLeft } from '@primeicons/angular/arrow-right-arrow-left';
import { ArrowUTurnUpLeft } from '@primeicons/angular/arrow-u-turn-up-left';
import { ArrowUTurnUpRight } from '@primeicons/angular/arrow-u-turn-up-right';
import { ArrowUp } from '@primeicons/angular/arrow-up';
import { ArrowUpLeft } from '@primeicons/angular/arrow-up-left';
import { ArrowUpRight } from '@primeicons/angular/arrow-up-right';
import { ArrowUpRightAndArrowDownLeftFromCenter } from '@primeicons/angular/arrow-up-right-and-arrow-down-left-from-center';
import { ArrowsAlt } from '@primeicons/angular/arrows-alt';
import { ArrowsH } from '@primeicons/angular/arrows-h';
import { ArrowsV } from '@primeicons/angular/arrows-v';
import { Asterisk } from '@primeicons/angular/asterisk';
import { At } from '@primeicons/angular/at';
import { Backward } from '@primeicons/angular/backward';
import { Ban } from '@primeicons/angular/ban';
import { Barcode } from '@primeicons/angular/barcode';
import { Bars } from '@primeicons/angular/bars';
import { Bell } from '@primeicons/angular/bell';
import { BellSlash } from '@primeicons/angular/bell-slash';
import { Bitcoin } from '@primeicons/angular/bitcoin';
import { Blank } from '@primeicons/angular/blank';
import { BlockQuote } from '@primeicons/angular/block-quote';
import { Bold } from '@primeicons/angular/bold';
import { Bolt } from '@primeicons/angular/bolt';
import { Book } from '@primeicons/angular/book';
import { Bookmark } from '@primeicons/angular/bookmark';
import { BookmarkFill } from '@primeicons/angular/bookmark-fill';
import { Box } from '@primeicons/angular/box';
import { Briefcase } from '@primeicons/angular/briefcase';
import { Building } from '@primeicons/angular/building';
import { BuildingColumns } from '@primeicons/angular/building-columns';
import { Bullseye } from '@primeicons/angular/bullseye';
import { Calculator } from '@primeicons/angular/calculator';
import { Calendar } from '@primeicons/angular/calendar';
import { CalendarClock } from '@primeicons/angular/calendar-clock';
import { CalendarMinus } from '@primeicons/angular/calendar-minus';
import { CalendarPlus } from '@primeicons/angular/calendar-plus';
import { CalendarTimes } from '@primeicons/angular/calendar-times';
import { Camera } from '@primeicons/angular/camera';
import { Car } from '@primeicons/angular/car';
import { CaretDown } from '@primeicons/angular/caret-down';
import { CaretLeft } from '@primeicons/angular/caret-left';
import { CaretRight } from '@primeicons/angular/caret-right';
import { CaretUp } from '@primeicons/angular/caret-up';
import { CartArrowDown } from '@primeicons/angular/cart-arrow-down';
import { CartMinus } from '@primeicons/angular/cart-minus';
import { CartPlus } from '@primeicons/angular/cart-plus';
import { CaseSensitive } from '@primeicons/angular/case-sensitive';
import { ChartBar } from '@primeicons/angular/chart-bar';
import { ChartLine } from '@primeicons/angular/chart-line';
import { ChartPie } from '@primeicons/angular/chart-pie';
import { ChartScatter } from '@primeicons/angular/chart-scatter';
import { Check } from '@primeicons/angular/check';
import { CheckCircle } from '@primeicons/angular/check-circle';
import { CheckSquare } from '@primeicons/angular/check-square';
import { ChevronCircleDown } from '@primeicons/angular/chevron-circle-down';
import { ChevronCircleLeft } from '@primeicons/angular/chevron-circle-left';
import { ChevronCircleRight } from '@primeicons/angular/chevron-circle-right';
import { ChevronCircleUp } from '@primeicons/angular/chevron-circle-up';
import { ChevronDown } from '@primeicons/angular/chevron-down';
import { ChevronLeft } from '@primeicons/angular/chevron-left';
import { ChevronRight } from '@primeicons/angular/chevron-right';
import { ChevronUp } from '@primeicons/angular/chevron-up';
import { Circle } from '@primeicons/angular/circle';
import { CircleFill } from '@primeicons/angular/circle-fill';
import { Clipboard } from '@primeicons/angular/clipboard';
import { Clock } from '@primeicons/angular/clock';
import { Clone } from '@primeicons/angular/clone';
import { Cloud } from '@primeicons/angular/cloud';
import { CloudDownload } from '@primeicons/angular/cloud-download';
import { CloudUpload } from '@primeicons/angular/cloud-upload';
import { Code } from '@primeicons/angular/code';
import { CodeBranch } from '@primeicons/angular/code-branch';
import { Cog } from '@primeicons/angular/cog';
import { Columns2 } from '@primeicons/angular/columns-2';
import { Comment } from '@primeicons/angular/comment';
import { Comments } from '@primeicons/angular/comments';
import { Compass } from '@primeicons/angular/compass';
import { Compress } from '@primeicons/angular/compress';
import { Copy } from '@primeicons/angular/copy';
import { CreditCard } from '@primeicons/angular/credit-card';
import { Crown } from '@primeicons/angular/crown';
import { Database } from '@primeicons/angular/database';
import { DeleteLeft } from '@primeicons/angular/delete-left';
import { Desktop } from '@primeicons/angular/desktop';
import { Directions } from '@primeicons/angular/directions';
import { DirectionsAlt } from '@primeicons/angular/directions-alt';
import { Discord } from '@primeicons/angular/discord';
import { Dollar } from '@primeicons/angular/dollar';
import { Dot } from '@primeicons/angular/dot';
import { Download } from '@primeicons/angular/download';
import { Eject } from '@primeicons/angular/eject';
import { EllipsisH } from '@primeicons/angular/ellipsis-h';
import { EllipsisV } from '@primeicons/angular/ellipsis-v';
import { Envelope } from '@primeicons/angular/envelope';
import { Equals } from '@primeicons/angular/equals';
import { Eraser } from '@primeicons/angular/eraser';
import { Ethereum } from '@primeicons/angular/ethereum';
import { Euro } from '@primeicons/angular/euro';
import { ExclamationCircle } from '@primeicons/angular/exclamation-circle';
import { ExclamationTriangle } from '@primeicons/angular/exclamation-triangle';
import { Expand } from '@primeicons/angular/expand';
import { ExternalLink } from '@primeicons/angular/external-link';
import { Eye } from '@primeicons/angular/eye';
import { EyeDropper } from '@primeicons/angular/eye-dropper';
import { EyeSlash } from '@primeicons/angular/eye-slash';
import { FaceSmile } from '@primeicons/angular/face-smile';
import { Facebook } from '@primeicons/angular/facebook';
import { FastBackward } from '@primeicons/angular/fast-backward';
import { FastForward } from '@primeicons/angular/fast-forward';
import { File } from '@primeicons/angular/file';
import { FileArrowUp } from '@primeicons/angular/file-arrow-up';
import { FileCheck } from '@primeicons/angular/file-check';
import { FileEdit } from '@primeicons/angular/file-edit';
import { FileExcel } from '@primeicons/angular/file-excel';
import { FileExport } from '@primeicons/angular/file-export';
import { FileImport } from '@primeicons/angular/file-import';
import { FileO } from '@primeicons/angular/file-o';
import { FilePdf } from '@primeicons/angular/file-pdf';
import { FilePlus } from '@primeicons/angular/file-plus';
import { FileWord } from '@primeicons/angular/file-word';
import { Filter } from '@primeicons/angular/filter';
import { FilterFill } from '@primeicons/angular/filter-fill';
import { FilterSlash } from '@primeicons/angular/filter-slash';
import { Flag } from '@primeicons/angular/flag';
import { FlagFill } from '@primeicons/angular/flag-fill';
import { Folder } from '@primeicons/angular/folder';
import { FolderOpen } from '@primeicons/angular/folder-open';
import { FolderPlus } from '@primeicons/angular/folder-plus';
import { Forward } from '@primeicons/angular/forward';
import { Gauge } from '@primeicons/angular/gauge';
import { Gift } from '@primeicons/angular/gift';
import { Github } from '@primeicons/angular/github';
import { Globe } from '@primeicons/angular/globe';
import { Google } from '@primeicons/angular/google';
import { GraduationCap } from '@primeicons/angular/graduation-cap';
import { Grid2 } from '@primeicons/angular/grid-2';
import { Grip } from '@primeicons/angular/grip';
import { GripHorizontal } from '@primeicons/angular/grip-horizontal';
import { GripVertical } from '@primeicons/angular/grip-vertical';
import { Hammer } from '@primeicons/angular/hammer';
import { Hashtag } from '@primeicons/angular/hashtag';
import { Heading } from '@primeicons/angular/heading';
import { Heading1 } from '@primeicons/angular/heading-1';
import { Heading2 } from '@primeicons/angular/heading-2';
import { Heading3 } from '@primeicons/angular/heading-3';
import { Heading4 } from '@primeicons/angular/heading-4';
import { Heading5 } from '@primeicons/angular/heading-5';
import { Heading6 } from '@primeicons/angular/heading-6';
import { Headphones } from '@primeicons/angular/headphones';
import { Heart } from '@primeicons/angular/heart';
import { HeartFill } from '@primeicons/angular/heart-fill';
import { Highlighter } from '@primeicons/angular/highlighter';
import { History } from '@primeicons/angular/history';
import { Home } from '@primeicons/angular/home';
import { HorizontalRule } from '@primeicons/angular/horizontal-rule';
import { Hourglass } from '@primeicons/angular/hourglass';
import { IdCard } from '@primeicons/angular/id-card';
import { Image } from '@primeicons/angular/image';
import { Images } from '@primeicons/angular/images';
import { Inbox } from '@primeicons/angular/inbox';
import { Indent } from '@primeicons/angular/indent';
import { IndianRupee } from '@primeicons/angular/indian-rupee';
import { Info } from '@primeicons/angular/info';
import { InfoCircle } from '@primeicons/angular/info-circle';
import { Instagram } from '@primeicons/angular/instagram';
import { Italic } from '@primeicons/angular/italic';
import { Key } from '@primeicons/angular/key';
import { Language } from '@primeicons/angular/language';
import { Lightbulb } from '@primeicons/angular/lightbulb';
import { Link } from '@primeicons/angular/link';
import { Linkedin } from '@primeicons/angular/linkedin';
import { List } from '@primeicons/angular/list';
import { ListCheck } from '@primeicons/angular/list-check';
import { ListOl } from '@primeicons/angular/list-ol';
import { ListTree } from '@primeicons/angular/list-tree';
import { Lock } from '@primeicons/angular/lock';
import { LockOpen } from '@primeicons/angular/lock-open';
import { Map } from '@primeicons/angular/map';
import { MapMarker } from '@primeicons/angular/map-marker';
import { Mars } from '@primeicons/angular/mars';
import { Megaphone } from '@primeicons/angular/megaphone';
import { Microchip } from '@primeicons/angular/microchip';
import { MicrochipAi } from '@primeicons/angular/microchip-ai';
import { Microphone } from '@primeicons/angular/microphone';
import { Microsoft } from '@primeicons/angular/microsoft';
import { Minus } from '@primeicons/angular/minus';
import { MinusCircle } from '@primeicons/angular/minus-circle';
import { Mobile } from '@primeicons/angular/mobile';
import { MoneyBill } from '@primeicons/angular/money-bill';
import { Moon } from '@primeicons/angular/moon';
import { NoteSticky } from '@primeicons/angular/note-sticky';
import { ObjectsColumn } from '@primeicons/angular/objects-column';
import { Outdent } from '@primeicons/angular/outdent';
import { Palette } from '@primeicons/angular/palette';
import { Paperclip } from '@primeicons/angular/paperclip';
import { ParagraphLeft } from '@primeicons/angular/paragraph-left';
import { ParagraphRight } from '@primeicons/angular/paragraph-right';
import { Pause } from '@primeicons/angular/pause';
import { PauseCircle } from '@primeicons/angular/pause-circle';
import { Paypal } from '@primeicons/angular/paypal';
import { PenLine } from '@primeicons/angular/pen-line';
import { PenToSquare } from '@primeicons/angular/pen-to-square';
import { Pencil } from '@primeicons/angular/pencil';
import { Percentage } from '@primeicons/angular/percentage';
import { Phone } from '@primeicons/angular/phone';
import { Pinterest } from '@primeicons/angular/pinterest';
import { Play } from '@primeicons/angular/play';
import { PlayCircle } from '@primeicons/angular/play-circle';
import { Plus } from '@primeicons/angular/plus';
import { PlusCircle } from '@primeicons/angular/plus-circle';
import { Pound } from '@primeicons/angular/pound';
import { PowerOff } from '@primeicons/angular/power-off';
import { Prime } from '@primeicons/angular/prime';
import { Print } from '@primeicons/angular/print';
import { Qrcode } from '@primeicons/angular/qrcode';
import { Question } from '@primeicons/angular/question';
import { QuestionCircle } from '@primeicons/angular/question-circle';
import { Receipt } from '@primeicons/angular/receipt';
import { RectangleXmark } from '@primeicons/angular/rectangle-xmark';
import { Reddit } from '@primeicons/angular/reddit';
import { Refresh } from '@primeicons/angular/refresh';
import { Replay } from '@primeicons/angular/replay';
import { Reply } from '@primeicons/angular/reply';
import { Rows2 } from '@primeicons/angular/rows-2';
import { Save } from '@primeicons/angular/save';
import { Search } from '@primeicons/angular/search';
import { SearchMinus } from '@primeicons/angular/search-minus';
import { SearchPlus } from '@primeicons/angular/search-plus';
import { Send } from '@primeicons/angular/send';
import { Server } from '@primeicons/angular/server';
import { ShareAlt } from '@primeicons/angular/share-alt';
import { Shield } from '@primeicons/angular/shield';
import { Shop } from '@primeicons/angular/shop';
import { ShoppingBag } from '@primeicons/angular/shopping-bag';
import { ShoppingCart } from '@primeicons/angular/shopping-cart';
import { Sidebar } from '@primeicons/angular/sidebar';
import { SignIn } from '@primeicons/angular/sign-in';
import { SignOut } from '@primeicons/angular/sign-out';
import { Signature } from '@primeicons/angular/signature';
import { Sitemap } from '@primeicons/angular/sitemap';
import { Slack } from '@primeicons/angular/slack';
import { Slash } from '@primeicons/angular/slash';
import { SlidersH } from '@primeicons/angular/sliders-h';
import { SlidersV } from '@primeicons/angular/sliders-v';
import { Sort } from '@primeicons/angular/sort';
import { SortAlphaDown } from '@primeicons/angular/sort-alpha-down';
import { SortAlphaDownAlt } from '@primeicons/angular/sort-alpha-down-alt';
import { SortAlphaUp } from '@primeicons/angular/sort-alpha-up';
import { SortAlphaUpAlt } from '@primeicons/angular/sort-alpha-up-alt';
import { SortAlt } from '@primeicons/angular/sort-alt';
import { SortAltSlash } from '@primeicons/angular/sort-alt-slash';
import { SortAmountDown } from '@primeicons/angular/sort-amount-down';
import { SortAmountDownAlt } from '@primeicons/angular/sort-amount-down-alt';
import { SortAmountUp } from '@primeicons/angular/sort-amount-up';
import { SortAmountUpAlt } from '@primeicons/angular/sort-amount-up-alt';
import { SortDown } from '@primeicons/angular/sort-down';
import { SortDownFill } from '@primeicons/angular/sort-down-fill';
import { SortNumericDown } from '@primeicons/angular/sort-numeric-down';
import { SortNumericDownAlt } from '@primeicons/angular/sort-numeric-down-alt';
import { SortNumericUp } from '@primeicons/angular/sort-numeric-up';
import { SortNumericUpAlt } from '@primeicons/angular/sort-numeric-up-alt';
import { SortUp } from '@primeicons/angular/sort-up';
import { SortUpFill } from '@primeicons/angular/sort-up-fill';
import { Sparkles } from '@primeicons/angular/sparkles';
import { Spinner } from '@primeicons/angular/spinner';
import { SpinnerDotted } from '@primeicons/angular/spinner-dotted';
import { Square } from '@primeicons/angular/square';
import { Stamp } from '@primeicons/angular/stamp';
import { Star } from '@primeicons/angular/star';
import { StarFill } from '@primeicons/angular/star-fill';
import { StarHalf } from '@primeicons/angular/star-half';
import { StarHalfFill } from '@primeicons/angular/star-half-fill';
import { StepBackward } from '@primeicons/angular/step-backward';
import { StepBackwardAlt } from '@primeicons/angular/step-backward-alt';
import { StepForward } from '@primeicons/angular/step-forward';
import { StepForwardAlt } from '@primeicons/angular/step-forward-alt';
import { Stop } from '@primeicons/angular/stop';
import { StopCircle } from '@primeicons/angular/stop-circle';
import { Stopwatch } from '@primeicons/angular/stopwatch';
import { Strikethrough } from '@primeicons/angular/strikethrough';
import { Subscript } from '@primeicons/angular/subscript';
import { Sun } from '@primeicons/angular/sun';
import { Superscript } from '@primeicons/angular/superscript';
import { Sync } from '@primeicons/angular/sync';
import { Table } from '@primeicons/angular/table';
import { Tablet } from '@primeicons/angular/tablet';
import { Tag } from '@primeicons/angular/tag';
import { Tags } from '@primeicons/angular/tags';
import { Telegram } from '@primeicons/angular/telegram';
import { Text } from '@primeicons/angular/text';
import { TextColor } from '@primeicons/angular/text-color';
import { ThLarge } from '@primeicons/angular/th-large';
import { ThumbsDown } from '@primeicons/angular/thumbs-down';
import { ThumbsDownFill } from '@primeicons/angular/thumbs-down-fill';
import { ThumbsUp } from '@primeicons/angular/thumbs-up';
import { ThumbsUpFill } from '@primeicons/angular/thumbs-up-fill';
import { Thumbtack } from '@primeicons/angular/thumbtack';
import { Ticket } from '@primeicons/angular/ticket';
import { Tiktok } from '@primeicons/angular/tiktok';
import { Times } from '@primeicons/angular/times';
import { TimesCircle } from '@primeicons/angular/times-circle';
import { Trash } from '@primeicons/angular/trash';
import { Trophy } from '@primeicons/angular/trophy';
import { Truck } from '@primeicons/angular/truck';
import { TurkishLira } from '@primeicons/angular/turkish-lira';
import { Twitch } from '@primeicons/angular/twitch';
import { Twitter } from '@primeicons/angular/twitter';
import { Underline } from '@primeicons/angular/underline';
import { Undo } from '@primeicons/angular/undo';
import { Unlock } from '@primeicons/angular/unlock';
import { Upload } from '@primeicons/angular/upload';
import { User } from '@primeicons/angular/user';
import { UserEdit } from '@primeicons/angular/user-edit';
import { UserMinus } from '@primeicons/angular/user-minus';
import { UserPlus } from '@primeicons/angular/user-plus';
import { Users } from '@primeicons/angular/users';
import { Venus } from '@primeicons/angular/venus';
import { Verified } from '@primeicons/angular/verified';
import { Video } from '@primeicons/angular/video';
import { Vimeo } from '@primeicons/angular/vimeo';
import { VolumeDown } from '@primeicons/angular/volume-down';
import { VolumeOff } from '@primeicons/angular/volume-off';
import { VolumeUp } from '@primeicons/angular/volume-up';
import { Wallet } from '@primeicons/angular/wallet';
import { Warehouse } from '@primeicons/angular/warehouse';
import { WavePulse } from '@primeicons/angular/wave-pulse';
import { Whatsapp } from '@primeicons/angular/whatsapp';
import { Wifi } from '@primeicons/angular/wifi';
import { WindowMaximize } from '@primeicons/angular/window-maximize';
import { WindowMinimize } from '@primeicons/angular/window-minimize';
import { Wrench } from '@primeicons/angular/wrench';
import { Youtube } from '@primeicons/angular/youtube';
//
import { TooltipExtension } from './directives/tooltip-extension';

const modules = [
    FormsModule,
    NgTemplateOutlet,
    // Form
    AutoCompleteModule,
    CascadeSelectModule,
    CheckboxModule,
    DatePickerModule,
    FloatLabelModule,
    IconFieldModule,
    InputIconModule,
    IftaLabelModule,
    InputColorModule,
    InputGroupModule,
    InputMaskModule,
    InputNumberModule,
    InputOtpModule,
    InputPasswordModule,
    InputTagsModule,
    InputTextModule,
    KeyFilterModule,
    KnobModule,
    LabelModule,
    ListboxModule,
    RadioButtonModule,
    RatingModule,
    SelectModule,
    SelectButtonModule,
    SliderModule,
    TextareaModule,
    ToggleButtonModule,
    ToggleSwitchModule,
    TreeSelectModule,
    // Button
    ButtonModule,
    ButtonGroupModule,
    SpeedDialModule,
    SplitButtonModule,
    // Data
    DataViewModule,
    OrderListModule,
    OrganizationChartModule,
    PaginatorModule,
    PickListModule,
    TableModule,
    TimelineModule,
    TreeModule,
    TreeTableModule,
    ScrollerModule,
    // Panel
    AccordionModule,
    CardModule,
    DividerModule,
    FieldsetModule,
    PanelModule,
    ScrollAreaModule,
    SplitterModule,
    StepperModule,
    TabsModule,
    ToolbarModule,
    // Overlay
    ConfirmDialogModule,
    ConfirmPopupModule,
    DialogModule,
    DrawerModule,
    DynamicDialogModule,
    PopoverModule,
    TooltipModule,
    // File
    FileUploadModule,
    // Menu
    BreadcrumbModule,
    CommandMenuModule,
    ContextMenuModule,
    DockModule,
    MegaMenuModule,
    MenuModule,
    MenubarModule,
    SidebarModule,
    TieredMenuModule,
    // Messages
    MessageModule,
    ToastModule,
    // Media
    CarouselModule,
    CompareModule,
    GalleryModule,
    // Misc
    AnimateOnScrollModule,
    AutoFocusModule,
    AvatarModule,
    AvatarGroupModule,
    BadgeModule,
    OverlayBadgeModule,
    BindModule,
    BlockUIModule,
    ChipModule,
    ClassNamesModule,
    FluidModule,
    FocusTrapModule,
    InplaceModule,
    MeterGroupModule,
    ProgressBarModule,
    ProgressSpinnerModule,
    RippleModule,
    ScrollTopModule,
    SkeletonModule,
    StyleClassModule,
    TagModule,
    TerminalModule,
    // Icons
    PIcon,
    AddressBook,
    AlignCenter,
    AlignJustify,
    AlignLeft,
    AlignRight,
    Amazon,
    Android,
    AngleDoubleDown,
    AngleDoubleLeft,
    AngleDoubleRight,
    AngleDoubleUp,
    AngleDown,
    AngleLeft,
    AngleRight,
    AngleUp,
    Apple,
    ArrowCircleDown,
    ArrowCircleLeft,
    ArrowCircleRight,
    ArrowCircleUp,
    ArrowDown,
    ArrowDownLeft,
    ArrowDownLeftAndArrowUpRightToCenter,
    ArrowDownRight,
    ArrowLeft,
    ArrowRight,
    ArrowRightArrowLeft,
    ArrowUTurnUpLeft,
    ArrowUTurnUpRight,
    ArrowUp,
    ArrowUpLeft,
    ArrowUpRight,
    ArrowUpRightAndArrowDownLeftFromCenter,
    ArrowsAlt,
    ArrowsH,
    ArrowsV,
    Asterisk,
    At,
    Backward,
    Ban,
    Barcode,
    Bars,
    Bell,
    BellSlash,
    Bitcoin,
    Blank,
    BlockQuote,
    Bold,
    Bolt,
    Book,
    Bookmark,
    BookmarkFill,
    Box,
    Briefcase,
    Building,
    BuildingColumns,
    Bullseye,
    Calculator,
    Calendar,
    CalendarClock,
    CalendarMinus,
    CalendarPlus,
    CalendarTimes,
    Camera,
    Car,
    CaretDown,
    CaretLeft,
    CaretRight,
    CaretUp,
    CartArrowDown,
    CartMinus,
    CartPlus,
    CaseSensitive,
    ChartBar,
    ChartLine,
    ChartPie,
    ChartScatter,
    Check,
    CheckCircle,
    CheckSquare,
    ChevronCircleDown,
    ChevronCircleLeft,
    ChevronCircleRight,
    ChevronCircleUp,
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    ChevronUp,
    Circle,
    CircleFill,
    Clipboard,
    Clock,
    Clone,
    Cloud,
    CloudDownload,
    CloudUpload,
    Code,
    CodeBranch,
    Cog,
    Columns2,
    Comment,
    Comments,
    Compass,
    Compress,
    Copy,
    CreditCard,
    Crown,
    Database,
    DeleteLeft,
    Desktop,
    Directions,
    DirectionsAlt,
    Discord,
    Dollar,
    Dot,
    Download,
    Eject,
    EllipsisH,
    EllipsisV,
    Envelope,
    Equals,
    Eraser,
    Ethereum,
    Euro,
    ExclamationCircle,
    ExclamationTriangle,
    Expand,
    ExternalLink,
    Eye,
    EyeDropper,
    EyeSlash,
    FaceSmile,
    Facebook,
    FastBackward,
    FastForward,
    File,
    FileArrowUp,
    FileCheck,
    FileEdit,
    FileExcel,
    FileExport,
    FileImport,
    FileO,
    FilePdf,
    FilePlus,
    FileWord,
    Filter,
    FilterFill,
    FilterSlash,
    Flag,
    FlagFill,
    Folder,
    FolderOpen,
    FolderPlus,
    Forward,
    Gauge,
    Gift,
    Github,
    Globe,
    Google,
    GraduationCap,
    Grid2,
    Grip,
    GripHorizontal,
    GripVertical,
    Hammer,
    Hashtag,
    Heading,
    Heading1,
    Heading2,
    Heading3,
    Heading4,
    Heading5,
    Heading6,
    Headphones,
    Heart,
    HeartFill,
    Highlighter,
    History,
    Home,
    HorizontalRule,
    Hourglass,
    IdCard,
    Image,
    Images,
    Inbox,
    Indent,
    IndianRupee,
    Info,
    InfoCircle,
    Instagram,
    Italic,
    Key,
    Language,
    Lightbulb,
    Link,
    Linkedin,
    List,
    ListCheck,
    ListOl,
    ListTree,
    Lock,
    LockOpen,
    Map,
    MapMarker,
    Mars,
    Megaphone,
    Microchip,
    MicrochipAi,
    Microphone,
    Microsoft,
    Minus,
    MinusCircle,
    Mobile,
    MoneyBill,
    Moon,
    NoteSticky,
    ObjectsColumn,
    Outdent,
    Palette,
    Paperclip,
    ParagraphLeft,
    ParagraphRight,
    Pause,
    PauseCircle,
    Paypal,
    PenLine,
    PenToSquare,
    Pencil,
    Percentage,
    Phone,
    Pinterest,
    Play,
    PlayCircle,
    Plus,
    PlusCircle,
    Pound,
    PowerOff,
    Prime,
    Print,
    Qrcode,
    Question,
    QuestionCircle,
    Receipt,
    RectangleXmark,
    Reddit,
    Refresh,
    Replay,
    Reply,
    Rows2,
    Save,
    Search,
    SearchMinus,
    SearchPlus,
    Send,
    Server,
    ShareAlt,
    Shield,
    Shop,
    ShoppingBag,
    ShoppingCart,
    Sidebar,
    SignIn,
    SignOut,
    Signature,
    Sitemap,
    Slack,
    Slash,
    SlidersH,
    SlidersV,
    Sort,
    SortAlphaDown,
    SortAlphaDownAlt,
    SortAlphaUp,
    SortAlphaUpAlt,
    SortAlt,
    SortAltSlash,
    SortAmountDown,
    SortAmountDownAlt,
    SortAmountUp,
    SortAmountUpAlt,
    SortDown,
    SortDownFill,
    SortNumericDown,
    SortNumericDownAlt,
    SortNumericUp,
    SortNumericUpAlt,
    SortUp,
    SortUpFill,
    Sparkles,
    Spinner,
    SpinnerDotted,
    Square,
    Stamp,
    Star,
    StarFill,
    StarHalf,
    StarHalfFill,
    StepBackward,
    StepBackwardAlt,
    StepForward,
    StepForwardAlt,
    Stop,
    StopCircle,
    Stopwatch,
    Strikethrough,
    Subscript,
    Sun,
    Superscript,
    Sync,
    Table,
    Tablet,
    Tag,
    Tags,
    Telegram,
    Text,
    TextColor,
    ThLarge,
    ThumbsDown,
    ThumbsDownFill,
    ThumbsUp,
    ThumbsUpFill,
    Thumbtack,
    Ticket,
    Tiktok,
    Times,
    TimesCircle,
    Trash,
    Trophy,
    Truck,
    TurkishLira,
    Twitch,
    Twitter,
    Underline,
    Undo,
    Unlock,
    Upload,
    User,
    UserEdit,
    UserMinus,
    UserPlus,
    Users,
    Venus,
    Verified,
    Video,
    Vimeo,
    VolumeDown,
    VolumeOff,
    VolumeUp,
    Wallet,
    Warehouse,
    WavePulse,
    Whatsapp,
    Wifi,
    WindowMaximize,
    WindowMinimize,
    Wrench,
    Youtube,
    //
    TooltipExtension
];

@NgModule({
    imports: [...modules],
    exports: [...modules],
})
export class SharedModule { }
