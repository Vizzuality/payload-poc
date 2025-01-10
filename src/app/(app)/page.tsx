import { ame } from "@/actions/auth";
import payloadConfig from "@/payload.config";
import Link from "next/link";
import { getPayload } from "payload";

export default async function HomePage({}) {
  let projects;

  const payload = await getPayload({ config: payloadConfig });

  const user = await ame();

  if (user) {
    projects = await payload.find({
      collection: "projects",
      limit: 10,
      overrideAccess: false,
      user,
      sort: "name",
    });
  }

  return (
    <ul>
      {projects?.docs?.map((project) => (
        <li key={project.id}>
          <Link href={`/projects/${project.id}`} className="inline-block p-4">
            <h2 className="text-xl font-semibold">{project.name}</h2>
            <p>{project.description}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
