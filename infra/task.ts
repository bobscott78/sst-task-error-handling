const vpc = new sst.aws.Vpc("MyVpc");
const cluster = new sst.aws.Cluster("MyCluster", { vpc });

export const task = new sst.aws.Task("MyTask", {
  cluster,
  image: {
    context: "app",
  },
  dev: {
    command: "node index.mjs",
  },
});
