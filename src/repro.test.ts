import { PrismaClient, User } from "@prisma/client";
import { DeepMockProxy, mockDeep } from "jest-mock-extended";
import { randomUUID } from "crypto";

describe("#10203", () => {
  it("cannot compile", async () => {
    const user: User = { id: randomUUID(), email: "ex@mp.le" };
    const mock = mockDeep<PrismaClient>();
    const prisma: DeepMockProxy<PrismaClient> =
      mock as unknown as DeepMockProxy<PrismaClient>;
    prisma.user.create.mockResolvedValue(user);
  });
});
