import { Meta, StoryObj } from '@storybook/react';
import { Checkbox, CheckboxProps } from "./Checkbox";
import { Text } from './Text';

export default {
    title: 'Components/Checkbox',
    component: Checkbox,
    args: {
        text: 'Accept terms and condition'
    },
    argTypes: {
    },
    decorators: [
        (Story, context) => (
            <div className='flex items-center gap-2'>
                <Story/>
                <Text size='sm'>{context.args.text}</Text>
            </div>
        )
    ]
} as Meta<CheckboxProps>

export const Default: StoryObj<CheckboxProps> = {}
