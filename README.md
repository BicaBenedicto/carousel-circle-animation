
# Carousel Circle Animation

This library create carousel animation with circle effect.


## Tech Stack

**Front-end:** React, Sass



## Installation

Install carousel-circle-animation with npm

```bash
  npm install carousel-circle-animation
  cd carousel-circle-animation
```

To use this library, needs config in `root` folder the sizes and quantify.

1. Create in `root` the file `carousel-animation.config.scss`.

```sass
// carousel-animation.config.scss

$length: 28; // Length of array used is very recommended
$quantity-small: 10; // Quantity go be show in small screen
$size-small: 0.1; // Size of items in small screen

$quantity-medium: 10; // Quantity go be show in medium screen
$size-medium: 0.3; // Size of items in medium screen

$quantity-big: 30; // Quantity go be show in big screen
$size-big: 0.03; // Size of items in big screen

$screen-medium: 'min-width: 600px'; // Config of start medium screen
$screen-big: 'min-width: 1000px'; // Config of start big screen

$height: 100px; // Recommended height of your items

```

Now you can copy this config in file and edit! :D
## Usage/Examples

```javascript
// Import component
import CarouselAnimation from 'carousel-circle-animation'

const data = [<div>Item 1</div>, <div>Item 2</div>];

function App() {
  return <CarouselAnimation data={ data } />
}
```

## Feedback

If you have any feedback, please reach out to us at gabrielpbenedicto@gmail.com


## Contributing

Contributions are always welcome!

`Fork` the project, do with you wanne upgrade, change or refactor, open PR with the description the changes ^^


## License

[MIT](https://github.com/BicaBenedicto/carousel-circle-animation/blob/master/LICENSE)


## Authors

### Gabriel Benedicto

| [![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:gabrielpbenedicto@gmail.com) | [![Linkedin](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/gabrielbenedicto/) | [![Telegram](https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/gabrielbenedicto) |
| ------|-------|-----|
