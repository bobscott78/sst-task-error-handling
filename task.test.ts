import { describe, expect, it } from "vitest";
import { task } from "sst/aws/task";
import { Resource } from "sst";

describe("task", () => {
  it("should run", async () => {
    const result = await task.run(Resource.MyTask);
    expect(result.status).toBe("PROVISIONING");
  });
});