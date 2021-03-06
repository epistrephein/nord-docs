/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

/**
 * @file Provides shared vector graphic component styles.
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.3.0
 */

import { css } from "styled-components";

import { colors, motion, themedMode, MODE_BRIGHT_SNOW_FLURRY, MODE_DARK_NIGHT_FROST } from "styles/theme";

const themeModeColor = themedMode({
  [MODE_BRIGHT_SNOW_FLURRY]: colors.font.base[MODE_BRIGHT_SNOW_FLURRY],
  [MODE_DARK_NIGHT_FROST]: colors.font.base[MODE_DARK_NIGHT_FROST]
});

/**
 * The value and transition for the fill color based on the active global theme mode.
 *
 * @since 0.3.0
 */
const themeModeFillColorStyles = css`
  fill: ${themeModeColor};
  transition: fill ${motion.speed.duration.transition.base.themeModeSwitch}ms ease-in-out;
`;

/**
 * The value and transition for the stroke color based on the active global theme mode.
 *
 * @since 0.8.0
 */
const themeModeStrokeColorStyles = css`
  stroke: ${themeModeColor};
  transition: stroke ${motion.speed.duration.transition.base.themeModeSwitch}ms ease-in-out;
`;

export { themeModeFillColorStyles, themeModeStrokeColorStyles };
