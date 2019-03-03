/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import React from "react";
import PropTypes from "prop-types";

import { colors } from "styles/theme";

/**
 * The Xcode logo as SVG vector graphic component.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.9.0
 */
const Xcode = ({ fillColors, svgRef, ...passProps }) => (
  <svg {...passProps} ref={svgRef} viewBox="0 0 40.184 46" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M23.838 22.401h-2.596v2.913h-.462v-2.913h-2.595v1.645h-.459v-1.645H16.63l-3.978 8.733H34.96c.507 0 .764-.258.764-.769v-7.199c0-.507-.257-.765-.764-.765h-1.494v2.912h-.461v-2.912h-2.597v1.687h-.458V22.4h-2.597v2.913h-.462V22.4h-2.595v1.688h-.459v-1.687zm-21.392 0H1.181c-.507 0-.766.258-.766.765v7.199c0 .511.258.769.766.769h1.118l3.211-7.045H5.5v-1.688H2.904v2.913h-.458v-2.913z"
      fill={fillColors.ruler}
    />
    <path
      d="M30.938 33.561c-.045.16-.084.332-.117.52a5.646 5.646 0 0 0 .008 1.861c.082.51.225 1.029.432 1.561.471 1.229 1.123 2.177 1.963 2.85a7.55 7.55 0 0 0 1.708.969l3.888 1.579c-.537-.263-.914-1.008-1.144-2.236a73.505 73.505 0 0 0-.511-2.621 51.605 51.605 0 0 0-.534-2.101 4.969 4.969 0 0 0-.15-.432c-.472-1.228-1.126-2.176-1.972-2.846a3.285 3.285 0 0 0-.432-.308l-3.139 1.204z"
      fill={fillColors.brushBristles}
    />
    <path
      d="M19.959 3.412c-.477.188-.622.516-.438.993l.199.521 3.34 1.524c.465.213.576.584.341 1.1l-1.277 2.816-.175.38L26.414 22.4h.479v2.913h.462V22.4h2.597v1.688h.458v-1.687h-.021L22.986 3.079c-.181-.479-.516-.628-.992-.442l-2.035.775zm1.283 18.989h-.462v2.913h.462v-2.913zm3.055 0h-.459v1.688h.459v-1.688zm9.17.013h-.461v2.9h.461v-2.9zm-30.563-.013h-.458v2.913h.458v-2.913zm3.055 0H5.5v1.688h.01l.45-.99v-.698zm12.226 0h-.459v1.645h.459v-1.645zm12.532 11.245l.221-.085 3.139-1.204.108-.039-.455-1.184h-3.972l.959 2.512z"
      fill={fillColors.brushStalk}
    />
    <path
      d="M23.4 7.55c.235-.516.124-.887-.341-1.1L19.72 4.926l-3.836-1.75c-.466-.21-.816-.05-1.055.466l-1.278 2.814 2.913 1.328 2.9 1.321 2.759 1.262L23.4 7.55zM6.292 38.777a1.781 1.781 0 0 0-.537.322c-.04.04-.082.082-.121.127l-.007.013h-.004l.008-.01c0-.018 0-.039.003-.057a1.577 1.577 0 0 0-.106-.71 1.585 1.585 0 0 0-.858-.921 1.58 1.58 0 0 0-1.261-.042 1.667 1.667 0 0 0-.531.311 1.87 1.87 0 0 0-.177.193c-.003.01-.003.019-.007.027l-.01-.003-.006-.006.034-.066c.008-.046.011-.097.015-.136a1.486 1.486 0 0 0-.104-.713 1.588 1.588 0 0 0-.859-.913 1.59 1.59 0 0 0-1.255-.052 1.757 1.757 0 0 0-.509.297c0 .018.006.027.01.035a.614.614 0 0 0 .118.303l1.344 4.328c.416.033.852.157 1.294.362.461.208.847.462 1.156.77l4.279-1.884c.033-.012.069-.033.1-.045a.805.805 0 0 0 .208-.179 2.357 2.357 0 0 0-.101-.386 1.59 1.59 0 0 0-.857-.915 1.613 1.613 0 0 0-1.259-.05z"
      fill={fillColors.pencilCanvas}
    />
    <path
      d="M21.948 10.747l.175-.38-2.759-1.262-.644 1.404 2.757 1.262.471-1.024z"
      fill={fillColors.pencilEraserRingRight}
    />
    <path d="M13.552 6.456l-.645 1.405 2.917 1.328.64-1.405-2.912-1.328z" fill={fillColors.pencilEraserRingLeft} />
    <path d="M16.464 7.784l-.64 1.405 2.896 1.319.644-1.404-2.9-1.32z" fill={fillColors.pencilEraserRingMiddle} />
    <path
      d="M15.824 9.189l-2.917-1.328-6.629 14.54-.319.697-.45.99-3.211 7.045-2.178 4.78a1.221 1.221 0 0 0-.12.449c.006.021 0 .055 0 .076.147-.121.311-.223.509-.297.42-.152.842-.141 1.255.053.414.186.696.492.859.913.092.235.129.475.104.713-.004.039-.007.09-.015.136L15.824 9.189z"
      fill={fillColors.pencilStalkLeft}
    />
    <path
      d="M18.721 10.509L15.825 9.19 2.712 37.956l-.034.066.006.006.01.003c.004-.009.004-.018.007-.027.061-.075.115-.136.177-.193.154-.133.33-.238.531-.311a1.58 1.58 0 0 1 1.261.042c.415.19.7.495.858.921.092.235.126.471.106.71-.003.018-.003.039-.003.057l-.008.01h.005l.007-.013 13.086-28.718z"
      fill={fillColors.pencilStalkMiddle}
    />
    <path
      d="M5.755 39.099c.154-.133.331-.244.537-.322.418-.151.842-.14 1.259.051.413.19.696.492.857.915.049.139.082.269.101.386.063-.078.125-.178.182-.308l3.962-8.687 3.978-8.733 4.847-10.631-2.757-1.262L5.634 39.226c.039-.045.081-.087.121-.127z"
      fill={fillColors.pencilStalkRight}
    />
    <path
      d="M3.922 42.236a3.878 3.878 0 0 0-1.156-.77 3.824 3.824 0 0 0-1.294-.362l.604 1.944 1.846-.812z"
      fill={fillColors.pencilMine}
    />
    <path
      d="M32.764 14.223c.127-.787-.203-1.241-.986-1.369l-2.002-.326c-.784-.126-1.237.203-1.364.989l-1.337 8.234 3.842 3.845 1.847-11.373z"
      fill={fillColors.screwdriverStalkShade}
    />
    <path
      d="M24.777 35.907c-.227.146-.459.455-.698.938-.295.604-.491 1.178-.576 1.715l.257 5.838c-.127.785.202 1.241.987 1.367l1.295.209c.784.127 1.24-.199 1.367-.984l2.092-5.458c.105-.646.097-2.281-.371-2.919l1.786-11.016-3.842-3.845-2.297 14.155z"
      fill={fillColors.screwdriverStalk}
    />
    <path
      d="M38.979 3.432c-.019-.02-.033-.041-.052-.059l-1.481 9.14a1.142 1.142 0 0 1-.48.776 1.15 1.15 0 0 1-.888.208l-1.059-.172a1.134 1.134 0 0 1-.776-.479 1.15 1.15 0 0 1-.208-.889l1.769-10.909a11.073 11.073 0 0 0-1.31-.492L32.68 11.737a1.148 1.148 0 0 1-.48.779 1.144 1.144 0 0 1-.887.208l-1.057-.172a1.155 1.155 0 0 1-.779-.477 1.156 1.156 0 0 1-.211-.891L31.082.001c-.143 0-.283-.003-.422 0-.311.003-.616.02-.915.048a.63.63 0 0 1-.06.011l-1.77 10.906a1.143 1.143 0 0 1-.479.774 1.141 1.141 0 0 1-.888.21l-1.06-.171a1.144 1.144 0 0 1-.778-.48 1.16 1.16 0 0 1-.209-.886l1.482-9.132c-1.229.746-1.983 1.714-2.268 2.907a4.42 4.42 0 0 0-.066.32c-.018.12-.029.229-.039.328l-1.24 7.649-.105.649c.054.006.108.012.166.021a2.42 2.42 0 0 1 1.63 1.005c.404.562.55 1.183.438 1.865a2.398 2.398 0 0 1-1.005 1.63 2.42 2.42 0 0 1-1.865.441 3.402 3.402 0 0 1-.163-.03l-.411 2.532 16.454 2.666.41-2.531c-.055-.008-.108-.015-.166-.026a2.41 2.41 0 0 1-1.63-1.005 2.42 2.42 0 0 1-.438-1.865 2.41 2.41 0 0 1 1.005-1.63 2.418 2.418 0 0 1 1.865-.439c.055.007.105.02.16.032l1.446-8.887c.121-1.219-.271-2.382-1.182-3.481z"
      fill={fillColors.screwdriverHandle}
    />
    <path
      d="M38.927 3.373a8.587 8.587 0 0 0-.564-.598 9.144 9.144 0 0 0-2.502-1.698c-.021-.011-.036-.02-.058-.029l-1.769 10.909a1.15 1.15 0 0 0 .208.889c.19.267.45.427.776.479l1.059.172c.326.051.622-.017.888-.208.269-.193.429-.45.48-.776l1.482-9.14zM34.091.442a13.48 13.48 0 0 0-3.009-.44l-1.816 11.183c-.052.328.018.622.211.891.193.264.45.424.779.477l1.057.172c.326.054.621-.017.887-.208.27-.193.428-.452.48-.779L34.493.557c-.133-.039-.268-.079-.402-.115zm-7.376.442a7.316 7.316 0 0 0-.661.354c-.024.012-.045.027-.069.042l-1.482 9.132c-.051.324.019.62.209.886.192.269.452.427.778.48l1.06.171c.323.054.622-.017.888-.21.266-.19.426-.447.479-.774L29.687.059a9.193 9.193 0 0 0-2.972.825z"
      fill={fillColors.screwdriverHandleLines}
    />
  </svg>
);

Xcode.propTypes = {
  fillColors: PropTypes.shape({
    brushBristles: PropTypes.string,
    brushStalk: PropTypes.string,
    pencilCanvas: PropTypes.string,
    pencilEraserRingLeft: PropTypes.string,
    pencilEraserRingMiddle: PropTypes.string,
    pencilEraserRingRight: PropTypes.string,
    pencilMine: PropTypes.string,
    pencilStalkLeft: PropTypes.string,
    pencilStalkMiddle: PropTypes.string,
    pencilStalkRight: PropTypes.string,
    ruler: PropTypes.string,
    rulerMarker: PropTypes.string,
    screwdriverHandle: PropTypes.string,
    screwdriverHandleLines: PropTypes.string,
    screwdriverStalk: PropTypes.string,
    screwdriverStalkShade: PropTypes.string
  }),
  svgRef: PropTypes.func
};

Xcode.defaultProps = {
  fillColors: {
    brushBristles: colors.nord8,
    brushStalk: colors.nord3,
    pencilCanvas: colors.nord8,
    pencilEraserRingLeft: colors.nord6,
    pencilEraserRingMiddle: colors.nord5,
    pencilEraserRingRight: colors.nord4,
    pencilMine: colors.nord3,
    pencilStalkLeft: colors.nord7,
    pencilStalkMiddle: colors.nord9,
    pencilStalkRight: colors.nord10,
    ruler: colors.nord8,
    rulerMarker: colors.nord10,
    screwdriverHandle: colors.nord9,
    screwdriverHandleLines: colors.nord10,
    screwdriverStalk: colors.nord5,
    screwdriverStalkShade: colors.nord4
  },
  svgRef: () => {}
};

export default Xcode;
