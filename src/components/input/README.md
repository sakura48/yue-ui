# input

**created by [sy](https://github.com/286506460)**

**Form**

>

## API

* props

1. elementId - 原生id属性
2. autocomplete - 原生属性
3. autofocus - 原生属性
4. clearable - 可清除，默认false
5. disabled - 原生属性
6. max - 原生属性
7. maxLength - 原生属性
8. min - 原生属性
9. name - 原生属性
10. placeholder - 原生属性
11. prefixIcon - 前置icon
12. readonly - 原生属性
13. required - 原生属性
14. suffixIcon - 后置icon
15. type - 原生属性，默认text
16. value - 原生属性

* events

1. blur - 失去焦点事件
2. focus - 获取焦点事件
3. change - value改变事件
4. suf-icon-click - 前置icon点击事件
5. pre-icon-click - 后置icon点击事件
6. prepend-click - 前置元素点击事件
7. append-click - 后置元素点击事件

* methods


## Example

```
<y-input
  name="hello"
  placeholder="hello"
  v-model="message"
  suffix-icon="times"
  @focus="handleFocus"
  @change="handleChange"
  @blur="handleBlur"
  @suf-icon-click="sufIconClick"
  @prepend-click="prependClick"
>
  <!--<i slot="suffix" class="fa fa-times y-input-suf"></i>-->
  <!--<i slot="prefix" class="fa fa-times y-input-pre"></i>-->
  <!--<template slot="prepend">Http://</template>-->
  <!--<template slot="append">.com</template>-->
</y-input>
```
