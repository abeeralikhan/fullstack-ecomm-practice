function Loading({ title }) {
  return (
    <div>{title ? <div>Loading {title}...</div> : <div>Loading...</div>}</div>
  );
}

export default Loading;
