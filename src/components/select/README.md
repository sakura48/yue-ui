# select

**created by [sy](https://github.com/286506460)**

**Form**

> Introduction...

## API

* props

1. disabled - 原生属性
2. name - 原生属性
3. options - option数据 Array类型
4. opt-label - option text
5. opt-value - option value

* events

1.change - select change事件

* methods


## Example

```
<y-select
  :options="options"
  v-model="mod"
  opt-label="label"
  opt-value="value"
  @change="handleChange"
></y-select>
```
