import { html } from 'lit';
import '../dt-single-select.js';

export default {
  title: 'dt-single-select',
  component: 'dt-single-select',
  argTypes: {
    name: { control: 'text' },
    placeholderLabel: { control: 'text' },
    value: { control: 'text' },
  },
};

function Template({ name = 'my-input', options, placeholderLabel, value, saveData, isLoading, isSaved }) {
  return html`
<style>
:root {
  --primary-color: #3f729b;
}
</style>
<script>
  window.saveFakeData = function (field, value, onSuccess, onError) {
    console.log(field, value);
    setTimeout(function () {
      onSuccess();
    }, 1000);
  }
</script>
    <dt-single-select
      name="${name}"
      placeholderLabel="${placeholderLabel}"
      options="${JSON.stringify(options)}"
      value="${value}"
      saveData="${saveData}"
      .isLoading="${isLoading}"
      .isSaved="${isSaved}"
    >
      
    </dt-single-select>
  `;
}

export const Empty = Template.bind({});

export const CustomOptions = Template.bind({});
CustomOptions.args = {
  options: [{
    id: 'opt1',
    label: 'Option 1',
  },{
    id: 'opt2',
    label: 'Option 2',
  },{
    id: 'opt3',
    label: 'Option 3',
  }],
};

export const CustomPlaceholder = Template.bind({});
CustomPlaceholder.args = {
  placeholderLabel: "--Select--",
};

export const SelectedValue = Template.bind({});
SelectedValue.args = {
  value: 'opt2',
  options: CustomOptions.args.options,
};

export const ColorChange = Template.bind({});
ColorChange.args = {
  value: 'opt1',
  options: [{
    id: 'opt1',
    label: 'Red',
    color: '#990000',
  },{
    id: 'opt2',
    label: 'Green',
    color: '#009900',
  },{
    id: 'opt3',
    label: 'Blue',
    color: '#000099',
  },{
    id: 'opt4',
    label: 'Pale Blue',
    color: '#aaaaff',
  }]
};

export const AutoSave = Template.bind({});
AutoSave.args = {
  options: CustomOptions.args.options,
  saveData: 'saveFakeData',
};

export const Loading = Template.bind({});
Loading.args = {
  value: 'opt2',
  options: CustomOptions.args.options,
  isLoading: true,
};
export const Saved = Template.bind({});
Saved.args = {
  value: 'opt2',
  options: CustomOptions.args.options,
  isSaved: true,
};
