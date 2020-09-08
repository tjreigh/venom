import React from 'react';

/**
 * Says hello world.
 * @param subject What the subject of the message is.
 * @returns Hello world message
 */
const HelloWorld = (props: {readonly subject?: string}): JSX.Element => {
	return <h1>Hello, {props.subject ?? 'world'}.</h1>;
};

export default HelloWorld;
