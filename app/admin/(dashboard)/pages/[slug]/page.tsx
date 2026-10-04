"use client";

import { useParams } from "next/navigation";
import { PageEditor } from "../../../components/PageEditor";

export default function EditPage() {
  const params = useParams<{ slug: string }>();
  return <PageEditor slug={params.slug} />;
}
