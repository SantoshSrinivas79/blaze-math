### Meteor helper for basic math operations

This package currently supports the four basic operations. All the operations support any number of terms.

#### Sum
```javascript
<template name="myTemplate">
  {{ math.sum 1 2 3 }}
  <!-- 1 + 2 + 3 = 6 -->
</template>
```

#### Substraction
```javascript
<template name="myTemplate">
  {{ math.sub 3 1 }}
  <!-- 3 - 1 = 2 -->
</template>
```

#### Multiplication
```javascript
<template name="myTemplate">
  {{ math.mul 3 1 2 }}
  <!-- 3 * 1 * 2 = 6 -->
</template>
```

#### Division
```javascript
<template name="myTemplate">
  {{ math.div 4 2 }}
  <!-- 4 / 2 = 2 -->
</template>
```
