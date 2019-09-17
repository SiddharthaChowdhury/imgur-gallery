class UtilDocument {
    disableBodyScroll = () => {
        document.documentElement.style.overflow = 'hidden';
        document.body.scroll = "no";
    }

    enableBodyScroll = () => {
        document.documentElement.style.overflow = 'scroll';
        document.body.scroll = "yes";
    }
}

export const utilDocument = new UtilDocument()