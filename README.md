# Custom Element drop file

The goal of this module is to add user interaction on a file input with multiple files as a progressive enhancement (the form still works if this JavaScript is disabled).

## Usage

```html
<input
        type="file"
        multiple
        name="files[]"
        label="Drop files here or click to upload."
        help="Upload files here and they won't be sent immediately"
        is="drop-files"
/>
``` 

## Attributes

| Attribute | Type     | Description                                          |
|-----------|----------|------------------------------------------------------|
| `label`   | `string` | The label used as a bold text for the drop area      |
| `help`   | `string` | Help text used as a secondary text for the drop area  |

## CSS Custom Properties

| Property                    |
|-----------------------------|
| `--drop-border-color`       |
| `--drop-border-color-hover` |


## Todo

- [ ] Publish on npm 
