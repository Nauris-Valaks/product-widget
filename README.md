# product-widget

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
``` 

### Implementation details
```
Has been implemented using vue3, vuex and vuetify as a component library.
Structure for components is as follows:
- components
  - product-widget
    - color-chooser
    - product-header
    - product-link
Each component containts a .vue and .ts file. I prefer a clear separation between template and TS logic. Template containts styling inside. If I had time I would add the use of scss and move all styling to respective .scss files and re structure the existing style implementation.

Product widget is the parent component. I have chosen to have a separate folders for models and util functions used.

As the API was returning named colors a color util was created to map the hex colours from figma instead for accurate colouring. 


```


