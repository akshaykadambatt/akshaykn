
declare const ScrollReveal: scrollReveal.ScrollRevealObject;
declare global {
    interface Window {
        FB:any;
        sr:any;
    }
    interface AppProps {
        theme: any;
      };
}
declare module "scrollreveal" {
    import ScrollReveal from "scrollreveal";
    export = ScrollReveal;
}
declare module "myModule" {
    export declare class AppProps {
        public theme: any;
    }
}
declare namespace scrollReveal {
    interface ScrollRevealRotateObject {
        x?: number | undefined;
        y?: number | undefined;
        z?: number | undefined;
    }

    interface ScrollRevealPositionObject {
        top?: number | undefined;
        right?: number | undefined;
        bottom?: number | undefined;
        left?: number | undefined;
    }

    interface ScrollRevealObjectOptions {
        origin?: string | undefined;
        distance?: string | undefined;
        duration?: number | undefined;
        delay?: number | undefined;
        interval?: number | undefined;
        rotate?: ScrollRevealRotateObject | undefined;
        opacity?: number | undefined;
        scale?: number | undefined;
        easing?: string | undefined;
        container?: any;
        mobile?: boolean | undefined;
        reset?: boolean | undefined;
        useDelay?: string | undefined;
        viewFactor?: number | undefined;
        viewOffset?: ScrollRevealPositionObject | undefined;
        beforeReveal?(domEl: HTMLElement | NodeListOf<Element>): void;
        afterReveal?(domEl: HTMLElement | NodeListOf<Element>): void;
        beforeReset?(domEl: HTMLElement | NodeListOf<Element>): void;
        afterReset?(domEl: HTMLElement | NodeListOf<Element>): void;
    }

    interface ScrollRevealObject {
        watch: (target: string | NodeListOf<Element> | HTMLElement, onEnter: any, onExit: () => void) => void;
        (): ScrollRevealObject;
        (options: ScrollRevealObjectOptions): ScrollRevealObject;
        reveal(selector: string | HTMLElement | NodeListOf<Element>): ScrollRevealObject;
        reveal(selector: string | HTMLElement | NodeListOf<Element>, interval: number): ScrollRevealObject;
        reveal(
            selector: string | HTMLElement | NodeListOf<Element>,
            options: ScrollRevealObjectOptions,
        ): ScrollRevealObject;
        reveal(
            selector: string | HTMLElement | NodeListOf<Element>,
            options: ScrollRevealObjectOptions,
            interval: number,
        ): ScrollRevealObject;

        sync(): void;
    }
}