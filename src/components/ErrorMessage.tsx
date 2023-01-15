interface ErrorProps {
    error: string;
}

export const ErrorMessage = ({error}: ErrorProps) => <p className='text-center text-red-600' > Error: {error} </p>;