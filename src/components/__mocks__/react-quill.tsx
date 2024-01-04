type ReactQuillMockProps = {
  children?: React.ReactNode;
};
const ReactQuillMock = ({ children }: ReactQuillMockProps) => (
  <div data-testid="react-quill">{children}</div>
);

export default ReactQuillMock;
