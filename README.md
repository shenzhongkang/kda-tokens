# @kda/tokens

Tokens for KDA Design System.

`yarn generate` will generate three types style file, `tokens.css`, `tokens.less`, `tokens.scss`.

## Usage

1. **CSS-In-JS**

```jsx
import tokens from '@kda/tokens';

<div style={{ color: tokens.color }}>Content</div>;
```

2. **Vanilla CSS**

```css
@import url('@idocs/tokens/tokens.css');

.container {
  color: var(--color);
}
```

3. **Less Precessor**

```less
@import '@kda/tokens/tokens.less';

.container {
  color: @color;
}
```

4. **Scss Precessor**

```scss
@import '@kda/tokens/tokens.scss';

.container {
  color: $color;
}
```
