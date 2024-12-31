import { Fragment } from "react/jsx-runtime";

interface IRootProps {
    error?: string;
}

export default function Root({ error, ...props }) {
    return (
        <Fragment>
            <div {...props} />
            {error && <span>error</span>}
        </Fragment>
    );
}
