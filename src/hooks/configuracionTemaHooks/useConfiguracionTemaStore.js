import { useDispatch, useSelector } from "react-redux";
import { onChangeComponentTheme, onChangeMenuMode, onChangeRipple, onChangeScheme, onChangeThemeColor } from "../../store/slice/configuracionTemaSlice/configuracionTemaSlice";

export const useConfiguracionTemaStore = () => {
    const dispatch = useDispatch();
    const { allConfig, menuMode, themeColor, componentTheme, layoutMode, ripple, colorScheme, } = useSelector((state) => state.configuracionTema);

    const onColorSchemeChange = (scheme) => {
        changeStyleSheetUrl('layout-css', 'layout-' + scheme + '.css', 1);
        changeStyleSheetUrl('theme-css', 'theme-' + scheme + '.css', 1);
        dispatch(onChangeScheme(scheme));
    };

    const changeStyleSheetUrl = (id, value, from) => {
        const element = document.getElementById(id);
        const urlTokens = element.getAttribute('href').split('/');

        if (from === 1) {
            // which function invoked this function - change scheme
            urlTokens[urlTokens.length - 1] = value;
        } else if (from === 2) {
            // which function invoked this function - change color
            urlTokens[urlTokens.length - 2] = value;
        }

        const newURL = urlTokens.join('/');

        replaceLink(element, newURL);
    };

    const onMenuThemeChange = (theme) => {
        const layoutLink = document.getElementById('layout-css');
        const href = '../assets/layout/css/' + theme + '/layout-' + colorScheme + '.css';
        replaceLink(layoutLink, href);
        dispatch(onChangeThemeColor(theme));
    };

    const onComponentThemeChange = (theme) => {
        const themeLink = document.getElementById('theme-css');
        const href = '../assets/theme/' + theme + '/theme-' + colorScheme + '.css';

        replaceLink(themeLink, href);
        dispatch(onChangeComponentTheme(theme));
    };

    const replaceLink = (linkElement, href, callback) => {
        const id = linkElement.getAttribute('id');
        const cloneLinkElement = linkElement.cloneNode(true);

        cloneLinkElement.setAttribute('href', href);
        cloneLinkElement.setAttribute('id', id + '-clone');

        linkElement.parentNode.insertBefore(cloneLinkElement, linkElement.nextSibling);

        cloneLinkElement.addEventListener('load', () => {
            linkElement.remove();
            const _linkElement = document.getElementById(id);
            _linkElement && _linkElement.remove();
            cloneLinkElement.setAttribute('id', id);

            if (callback) {
                callback();
            }
        });
    };

    const setMenuMode = (mode) => {
        dispatch(onChangeMenuMode(mode));
    };

    const setRipple = (value) => {
        dispatch(onChangeRipple(value));
    };



    return {
        /**Propiedades **/
        allConfig,
        menuMode,
        themeColor,
        componentTheme,
        layoutMode,
        ripple,
        colorScheme,
        /** M??todos **/
        onColorSchemeChange,
        onMenuThemeChange,
        onComponentThemeChange,
        setRipple,
        setMenuMode,

    };

};
