import { TextInput, Checkbox, Button, Group, Box, Textarea, Title } from '@mantine/core';
import { useForm } from '@mantine/form';

export function Contact() {
    const form = useForm({
        initialValues: {
            name: '',
            email: '',
            subject: '',
            yourmessage: '',
            termsOfService: false,
        },


        validate: {
            name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
            subject: (value) => (value.length <= 0 ? 'Please enter a subject' : null),
            yourmessage: (value) => (value.length <= 0 ? 'Please enter some information' : null),
            termsOfService: (value) => (value ? null: 'Please check the terms of service'),
        },
    });


    return (
        <Box className='mt-32' maw={500} mx="auto">
            <form className="border p-10 rounded-3xl shadow-sm " onSubmit={form.onSubmit((values) => console.log(values))}>
                <Title className='text-center'>Contact Us</Title>
                <div className='mt-4'>
                    <div className='flex gap-5'>
                        <TextInput
                            withAsterisk
                            label="Name"
                            placeholder="Name"
                            {...form.getInputProps('name')}
                        />
                        <TextInput
                        withAsterisk
                        label="Email"
                        placeholder="your@email.com"
                        {...form.getInputProps('email')}
                        />
                    </div>

                    <div className='mt-4'>
                        <TextInput
                            withAsterisk
                            label="Subject"
                            placeholder='Subject'
                            {...form.getInputProps('subject')}
                        />

                        <Textarea
                            withAsterisk
                            label="Your Message"
                            placeholder="Please include any valid information"
                            minRows={3}
                            className='mt-4'
                            {...form.getInputProps('yourmessage')}
                        />
                    </div>
                </div>

                <div className='flex items-center gap-4 mt-4'>

                    <Checkbox
                    mt="md"
                    label="I agree to term of service"
                    {...form.getInputProps('termsOfService', { type: 'checkbox' })}
                    />

                    <Group position="center" mt="md">
                    <Button type="submit" variant="outline">Submit</Button>
                    </Group>
                </div>
            </form>
        </Box>
    )
}