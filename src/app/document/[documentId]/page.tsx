import { Editor } from "./editor";
interface DocumentIdPageProps {
  params: Promise<{ documentId: string }>;
}
const DocumentIdPage = async ({ params }: DocumentIdPageProps) => {
  const { documentId } = await params;
  return (
    <div className="mih-h-screen bg-[#fafbfd]">
      <Editor />
    </div>
  );
};

export default DocumentIdPage;
