# `consulCluster` Submodule <a name="`consulCluster` Submodule" id="@cdktf/provider-hcp.consulCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConsulCluster <a name="ConsulCluster" id="@cdktf/provider-hcp.consulCluster.ConsulCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/consul_cluster hcp_consul_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.consul_cluster.ConsulCluster;

ConsulCluster.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .clusterId(java.lang.String)
    .hvnId(java.lang.String)
    .tier(java.lang.String)
//  .autoHvnToHvnPeering(java.lang.Boolean)
//  .autoHvnToHvnPeering(IResolvable)
//  .connectEnabled(java.lang.Boolean)
//  .connectEnabled(IResolvable)
//  .datacenter(java.lang.String)
//  .id(java.lang.String)
//  .ipAllowlist(IResolvable)
//  .ipAllowlist(java.util.List<ConsulClusterIpAllowlistStruct>)
//  .minConsulVersion(java.lang.String)
//  .primaryLink(java.lang.String)
//  .projectId(java.lang.String)
//  .publicEndpoint(java.lang.Boolean)
//  .publicEndpoint(IResolvable)
//  .size(java.lang.String)
//  .timeouts(ConsulClusterTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.clusterId">clusterId</a></code> | <code>java.lang.String</code> | The ID of the HCP Consul cluster. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.hvnId">hvnId</a></code> | <code>java.lang.String</code> | The ID of the HVN this HCP Consul cluster is associated to. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.tier">tier</a></code> | <code>java.lang.String</code> | The tier that the HCP Consul cluster will be provisioned as. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.autoHvnToHvnPeering">autoHvnToHvnPeering</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enables automatic HVN to HVN peering when creating a secondary cluster in a federation. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.connectEnabled">connectEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Denotes the Consul connect feature should be enabled for this cluster.  Default to true. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.datacenter">datacenter</a></code> | <code>java.lang.String</code> | The Consul data center name of the cluster. If not specified, it is defaulted to the value of `cluster_id`. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/consul_cluster#id ConsulCluster#id}. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.ipAllowlist">ipAllowlist</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStruct">ConsulClusterIpAllowlistStruct</a>></code> | ip_allowlist block. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.minConsulVersion">minConsulVersion</a></code> | <code>java.lang.String</code> | The minimum Consul patch version of the cluster. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.primaryLink">primaryLink</a></code> | <code>java.lang.String</code> | The `self_link` of the HCP Consul cluster which is the primary in the federation setup with this HCP Consul cluster. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | The ID of the HCP project where the HCP Consul cluster is located. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.publicEndpoint">publicEndpoint</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Denotes that the cluster has a public endpoint for the Consul UI. Defaults to false. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.size">size</a></code> | <code>java.lang.String</code> | The t-shirt size representation of each server VM that this Consul cluster is provisioned with. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeouts">ConsulClusterTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.clusterId"></a>

- *Type:* java.lang.String

The ID of the HCP Consul cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/consul_cluster#cluster_id ConsulCluster#cluster_id}

---

##### `hvnId`<sup>Required</sup> <a name="hvnId" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.hvnId"></a>

- *Type:* java.lang.String

The ID of the HVN this HCP Consul cluster is associated to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/consul_cluster#hvn_id ConsulCluster#hvn_id}

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.tier"></a>

- *Type:* java.lang.String

The tier that the HCP Consul cluster will be provisioned as.

Only `development`, `standard`, `plus`, and `premium` are available at this time. See [pricing information](https://www.hashicorp.com/products/consul/pricing).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/consul_cluster#tier ConsulCluster#tier}

---

##### `autoHvnToHvnPeering`<sup>Optional</sup> <a name="autoHvnToHvnPeering" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.autoHvnToHvnPeering"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enables automatic HVN to HVN peering when creating a secondary cluster in a federation.

The alternative to using the auto-accept feature is to create an [`hcp_hvn_peering_connection`](hvn_peering_connection.md) resource that explicitly defines the HVN resources that are allowed to communicate with each other.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/consul_cluster#auto_hvn_to_hvn_peering ConsulCluster#auto_hvn_to_hvn_peering}

---

##### `connectEnabled`<sup>Optional</sup> <a name="connectEnabled" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.connectEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Denotes the Consul connect feature should be enabled for this cluster.  Default to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/consul_cluster#connect_enabled ConsulCluster#connect_enabled}

---

##### `datacenter`<sup>Optional</sup> <a name="datacenter" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.datacenter"></a>

- *Type:* java.lang.String

The Consul data center name of the cluster. If not specified, it is defaulted to the value of `cluster_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/consul_cluster#datacenter ConsulCluster#datacenter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/consul_cluster#id ConsulCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipAllowlist`<sup>Optional</sup> <a name="ipAllowlist" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.ipAllowlist"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStruct">ConsulClusterIpAllowlistStruct</a>>

ip_allowlist block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/consul_cluster#ip_allowlist ConsulCluster#ip_allowlist}

---

##### `minConsulVersion`<sup>Optional</sup> <a name="minConsulVersion" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.minConsulVersion"></a>

- *Type:* java.lang.String

The minimum Consul patch version of the cluster.

Allows only the rightmost version component to increment (E.g: `1.13.0` will allow installation of `1.13.2` and `1.13.3` etc., but not `1.14.0`). If not specified, it is defaulted to the version that is currently recommended by HCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/consul_cluster#min_consul_version ConsulCluster#min_consul_version}

---

##### `primaryLink`<sup>Optional</sup> <a name="primaryLink" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.primaryLink"></a>

- *Type:* java.lang.String

The `self_link` of the HCP Consul cluster which is the primary in the federation setup with this HCP Consul cluster.

If not specified, it is a standalone cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/consul_cluster#primary_link ConsulCluster#primary_link}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

The ID of the HCP project where the HCP Consul cluster is located.

If not specified, the project specified in the HCP Provider config block will be used, if configured.
If a project is not configured in the HCP Provider config block, the oldest project in the organization will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/consul_cluster#project_id ConsulCluster#project_id}

---

##### `publicEndpoint`<sup>Optional</sup> <a name="publicEndpoint" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.publicEndpoint"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Denotes that the cluster has a public endpoint for the Consul UI. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/consul_cluster#public_endpoint ConsulCluster#public_endpoint}

---

##### `size`<sup>Optional</sup> <a name="size" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.size"></a>

- *Type:* java.lang.String

The t-shirt size representation of each server VM that this Consul cluster is provisioned with.

Valid option for development tier - `x_small`. Valid options for other tiers - `small`, `medium`, `large`. For more details - https://cloud.hashicorp.com/pricing/consul. Upgrading the size of a cluster after creation is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/consul_cluster#size ConsulCluster#size}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeouts">ConsulClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/consul_cluster#timeouts ConsulCluster#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.putIpAllowlist">putIpAllowlist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.resetAutoHvnToHvnPeering">resetAutoHvnToHvnPeering</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.resetConnectEnabled">resetConnectEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.resetDatacenter">resetDatacenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.resetIpAllowlist">resetIpAllowlist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.resetMinConsulVersion">resetMinConsulVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.resetPrimaryLink">resetPrimaryLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.resetPublicEndpoint">resetPublicEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.resetSize">resetSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIpAllowlist` <a name="putIpAllowlist" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.putIpAllowlist"></a>

```java
public void putIpAllowlist(IResolvable OR java.util.List<ConsulClusterIpAllowlistStruct> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.putIpAllowlist.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStruct">ConsulClusterIpAllowlistStruct</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.putTimeouts"></a>

```java
public void putTimeouts(ConsulClusterTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeouts">ConsulClusterTimeouts</a>

---

##### `resetAutoHvnToHvnPeering` <a name="resetAutoHvnToHvnPeering" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.resetAutoHvnToHvnPeering"></a>

```java
public void resetAutoHvnToHvnPeering()
```

##### `resetConnectEnabled` <a name="resetConnectEnabled" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.resetConnectEnabled"></a>

```java
public void resetConnectEnabled()
```

##### `resetDatacenter` <a name="resetDatacenter" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.resetDatacenter"></a>

```java
public void resetDatacenter()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.resetId"></a>

```java
public void resetId()
```

##### `resetIpAllowlist` <a name="resetIpAllowlist" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.resetIpAllowlist"></a>

```java
public void resetIpAllowlist()
```

##### `resetMinConsulVersion` <a name="resetMinConsulVersion" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.resetMinConsulVersion"></a>

```java
public void resetMinConsulVersion()
```

##### `resetPrimaryLink` <a name="resetPrimaryLink" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.resetPrimaryLink"></a>

```java
public void resetPrimaryLink()
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.resetProjectId"></a>

```java
public void resetProjectId()
```

##### `resetPublicEndpoint` <a name="resetPublicEndpoint" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.resetPublicEndpoint"></a>

```java
public void resetPublicEndpoint()
```

##### `resetSize` <a name="resetSize" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.resetSize"></a>

```java
public void resetSize()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ConsulCluster resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.hcp.consul_cluster.ConsulCluster;

ConsulCluster.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.hcp.consul_cluster.ConsulCluster;

ConsulCluster.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.hcp.consul_cluster.ConsulCluster;

ConsulCluster.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.hcp.consul_cluster.ConsulCluster;

ConsulCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ConsulCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ConsulCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ConsulCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ConsulCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/consul_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ConsulCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.cloudProvider">cloudProvider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.consulAutomaticUpgrades">consulAutomaticUpgrades</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.consulCaFile">consulCaFile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.consulConfigFile">consulConfigFile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.consulPrivateEndpointUrl">consulPrivateEndpointUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.consulPublicEndpointUrl">consulPublicEndpointUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.consulRootTokenAccessorId">consulRootTokenAccessorId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.consulRootTokenSecretId">consulRootTokenSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.consulSnapshotInterval">consulSnapshotInterval</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.consulSnapshotRetention">consulSnapshotRetention</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.consulVersion">consulVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.ipAllowlist">ipAllowlist</a></code> | <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList">ConsulClusterIpAllowlistStructList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.organizationId">organizationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.scale">scale</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference">ConsulClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.autoHvnToHvnPeeringInput">autoHvnToHvnPeeringInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.clusterIdInput">clusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.connectEnabledInput">connectEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.datacenterInput">datacenterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.hvnIdInput">hvnIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.ipAllowlistInput">ipAllowlistInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStruct">ConsulClusterIpAllowlistStruct</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.minConsulVersionInput">minConsulVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.primaryLinkInput">primaryLinkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.publicEndpointInput">publicEndpointInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.sizeInput">sizeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.tierInput">tierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeouts">ConsulClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.autoHvnToHvnPeering">autoHvnToHvnPeering</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.connectEnabled">connectEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.datacenter">datacenter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.hvnId">hvnId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.minConsulVersion">minConsulVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.primaryLink">primaryLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.publicEndpoint">publicEndpoint</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.size">size</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.tier">tier</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cloudProvider`<sup>Required</sup> <a name="cloudProvider" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.cloudProvider"></a>

```java
public java.lang.String getCloudProvider();
```

- *Type:* java.lang.String

---

##### `consulAutomaticUpgrades`<sup>Required</sup> <a name="consulAutomaticUpgrades" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.consulAutomaticUpgrades"></a>

```java
public IResolvable getConsulAutomaticUpgrades();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `consulCaFile`<sup>Required</sup> <a name="consulCaFile" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.consulCaFile"></a>

```java
public java.lang.String getConsulCaFile();
```

- *Type:* java.lang.String

---

##### `consulConfigFile`<sup>Required</sup> <a name="consulConfigFile" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.consulConfigFile"></a>

```java
public java.lang.String getConsulConfigFile();
```

- *Type:* java.lang.String

---

##### `consulPrivateEndpointUrl`<sup>Required</sup> <a name="consulPrivateEndpointUrl" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.consulPrivateEndpointUrl"></a>

```java
public java.lang.String getConsulPrivateEndpointUrl();
```

- *Type:* java.lang.String

---

##### `consulPublicEndpointUrl`<sup>Required</sup> <a name="consulPublicEndpointUrl" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.consulPublicEndpointUrl"></a>

```java
public java.lang.String getConsulPublicEndpointUrl();
```

- *Type:* java.lang.String

---

##### `consulRootTokenAccessorId`<sup>Required</sup> <a name="consulRootTokenAccessorId" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.consulRootTokenAccessorId"></a>

```java
public java.lang.String getConsulRootTokenAccessorId();
```

- *Type:* java.lang.String

---

##### `consulRootTokenSecretId`<sup>Required</sup> <a name="consulRootTokenSecretId" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.consulRootTokenSecretId"></a>

```java
public java.lang.String getConsulRootTokenSecretId();
```

- *Type:* java.lang.String

---

##### `consulSnapshotInterval`<sup>Required</sup> <a name="consulSnapshotInterval" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.consulSnapshotInterval"></a>

```java
public java.lang.String getConsulSnapshotInterval();
```

- *Type:* java.lang.String

---

##### `consulSnapshotRetention`<sup>Required</sup> <a name="consulSnapshotRetention" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.consulSnapshotRetention"></a>

```java
public java.lang.String getConsulSnapshotRetention();
```

- *Type:* java.lang.String

---

##### `consulVersion`<sup>Required</sup> <a name="consulVersion" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.consulVersion"></a>

```java
public java.lang.String getConsulVersion();
```

- *Type:* java.lang.String

---

##### `ipAllowlist`<sup>Required</sup> <a name="ipAllowlist" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.ipAllowlist"></a>

```java
public ConsulClusterIpAllowlistStructList getIpAllowlist();
```

- *Type:* <a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList">ConsulClusterIpAllowlistStructList</a>

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.organizationId"></a>

```java
public java.lang.String getOrganizationId();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `scale`<sup>Required</sup> <a name="scale" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.scale"></a>

```java
public java.lang.Number getScale();
```

- *Type:* java.lang.Number

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.timeouts"></a>

```java
public ConsulClusterTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference">ConsulClusterTimeoutsOutputReference</a>

---

##### `autoHvnToHvnPeeringInput`<sup>Optional</sup> <a name="autoHvnToHvnPeeringInput" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.autoHvnToHvnPeeringInput"></a>

```java
public java.lang.Object getAutoHvnToHvnPeeringInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.clusterIdInput"></a>

```java
public java.lang.String getClusterIdInput();
```

- *Type:* java.lang.String

---

##### `connectEnabledInput`<sup>Optional</sup> <a name="connectEnabledInput" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.connectEnabledInput"></a>

```java
public java.lang.Object getConnectEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `datacenterInput`<sup>Optional</sup> <a name="datacenterInput" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.datacenterInput"></a>

```java
public java.lang.String getDatacenterInput();
```

- *Type:* java.lang.String

---

##### `hvnIdInput`<sup>Optional</sup> <a name="hvnIdInput" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.hvnIdInput"></a>

```java
public java.lang.String getHvnIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ipAllowlistInput`<sup>Optional</sup> <a name="ipAllowlistInput" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.ipAllowlistInput"></a>

```java
public java.lang.Object getIpAllowlistInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStruct">ConsulClusterIpAllowlistStruct</a>>

---

##### `minConsulVersionInput`<sup>Optional</sup> <a name="minConsulVersionInput" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.minConsulVersionInput"></a>

```java
public java.lang.String getMinConsulVersionInput();
```

- *Type:* java.lang.String

---

##### `primaryLinkInput`<sup>Optional</sup> <a name="primaryLinkInput" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.primaryLinkInput"></a>

```java
public java.lang.String getPrimaryLinkInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `publicEndpointInput`<sup>Optional</sup> <a name="publicEndpointInput" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.publicEndpointInput"></a>

```java
public java.lang.Object getPublicEndpointInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.sizeInput"></a>

```java
public java.lang.String getSizeInput();
```

- *Type:* java.lang.String

---

##### `tierInput`<sup>Optional</sup> <a name="tierInput" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.tierInput"></a>

```java
public java.lang.String getTierInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeouts">ConsulClusterTimeouts</a>

---

##### `autoHvnToHvnPeering`<sup>Required</sup> <a name="autoHvnToHvnPeering" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.autoHvnToHvnPeering"></a>

```java
public java.lang.Object getAutoHvnToHvnPeering();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

---

##### `connectEnabled`<sup>Required</sup> <a name="connectEnabled" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.connectEnabled"></a>

```java
public java.lang.Object getConnectEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `datacenter`<sup>Required</sup> <a name="datacenter" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.datacenter"></a>

```java
public java.lang.String getDatacenter();
```

- *Type:* java.lang.String

---

##### `hvnId`<sup>Required</sup> <a name="hvnId" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.hvnId"></a>

```java
public java.lang.String getHvnId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `minConsulVersion`<sup>Required</sup> <a name="minConsulVersion" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.minConsulVersion"></a>

```java
public java.lang.String getMinConsulVersion();
```

- *Type:* java.lang.String

---

##### `primaryLink`<sup>Required</sup> <a name="primaryLink" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.primaryLink"></a>

```java
public java.lang.String getPrimaryLink();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `publicEndpoint`<sup>Required</sup> <a name="publicEndpoint" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.publicEndpoint"></a>

```java
public java.lang.Object getPublicEndpoint();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.size"></a>

```java
public java.lang.String getSize();
```

- *Type:* java.lang.String

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.tier"></a>

```java
public java.lang.String getTier();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ConsulClusterConfig <a name="ConsulClusterConfig" id="@cdktf/provider-hcp.consulCluster.ConsulClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.consul_cluster.ConsulClusterConfig;

ConsulClusterConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .clusterId(java.lang.String)
    .hvnId(java.lang.String)
    .tier(java.lang.String)
//  .autoHvnToHvnPeering(java.lang.Boolean)
//  .autoHvnToHvnPeering(IResolvable)
//  .connectEnabled(java.lang.Boolean)
//  .connectEnabled(IResolvable)
//  .datacenter(java.lang.String)
//  .id(java.lang.String)
//  .ipAllowlist(IResolvable)
//  .ipAllowlist(java.util.List<ConsulClusterIpAllowlistStruct>)
//  .minConsulVersion(java.lang.String)
//  .primaryLink(java.lang.String)
//  .projectId(java.lang.String)
//  .publicEndpoint(java.lang.Boolean)
//  .publicEndpoint(IResolvable)
//  .size(java.lang.String)
//  .timeouts(ConsulClusterTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | The ID of the HCP Consul cluster. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.hvnId">hvnId</a></code> | <code>java.lang.String</code> | The ID of the HVN this HCP Consul cluster is associated to. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.tier">tier</a></code> | <code>java.lang.String</code> | The tier that the HCP Consul cluster will be provisioned as. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.autoHvnToHvnPeering">autoHvnToHvnPeering</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enables automatic HVN to HVN peering when creating a secondary cluster in a federation. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.connectEnabled">connectEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Denotes the Consul connect feature should be enabled for this cluster.  Default to true. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.datacenter">datacenter</a></code> | <code>java.lang.String</code> | The Consul data center name of the cluster. If not specified, it is defaulted to the value of `cluster_id`. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/consul_cluster#id ConsulCluster#id}. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.ipAllowlist">ipAllowlist</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStruct">ConsulClusterIpAllowlistStruct</a>></code> | ip_allowlist block. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.minConsulVersion">minConsulVersion</a></code> | <code>java.lang.String</code> | The minimum Consul patch version of the cluster. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.primaryLink">primaryLink</a></code> | <code>java.lang.String</code> | The `self_link` of the HCP Consul cluster which is the primary in the federation setup with this HCP Consul cluster. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | The ID of the HCP project where the HCP Consul cluster is located. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.publicEndpoint">publicEndpoint</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Denotes that the cluster has a public endpoint for the Consul UI. Defaults to false. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.size">size</a></code> | <code>java.lang.String</code> | The t-shirt size representation of each server VM that this Consul cluster is provisioned with. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeouts">ConsulClusterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

The ID of the HCP Consul cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/consul_cluster#cluster_id ConsulCluster#cluster_id}

---

##### `hvnId`<sup>Required</sup> <a name="hvnId" id="@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.hvnId"></a>

```java
public java.lang.String getHvnId();
```

- *Type:* java.lang.String

The ID of the HVN this HCP Consul cluster is associated to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/consul_cluster#hvn_id ConsulCluster#hvn_id}

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.tier"></a>

```java
public java.lang.String getTier();
```

- *Type:* java.lang.String

The tier that the HCP Consul cluster will be provisioned as.

Only `development`, `standard`, `plus`, and `premium` are available at this time. See [pricing information](https://www.hashicorp.com/products/consul/pricing).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/consul_cluster#tier ConsulCluster#tier}

---

##### `autoHvnToHvnPeering`<sup>Optional</sup> <a name="autoHvnToHvnPeering" id="@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.autoHvnToHvnPeering"></a>

```java
public java.lang.Object getAutoHvnToHvnPeering();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enables automatic HVN to HVN peering when creating a secondary cluster in a federation.

The alternative to using the auto-accept feature is to create an [`hcp_hvn_peering_connection`](hvn_peering_connection.md) resource that explicitly defines the HVN resources that are allowed to communicate with each other.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/consul_cluster#auto_hvn_to_hvn_peering ConsulCluster#auto_hvn_to_hvn_peering}

---

##### `connectEnabled`<sup>Optional</sup> <a name="connectEnabled" id="@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.connectEnabled"></a>

```java
public java.lang.Object getConnectEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Denotes the Consul connect feature should be enabled for this cluster.  Default to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/consul_cluster#connect_enabled ConsulCluster#connect_enabled}

---

##### `datacenter`<sup>Optional</sup> <a name="datacenter" id="@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.datacenter"></a>

```java
public java.lang.String getDatacenter();
```

- *Type:* java.lang.String

The Consul data center name of the cluster. If not specified, it is defaulted to the value of `cluster_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/consul_cluster#datacenter ConsulCluster#datacenter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/consul_cluster#id ConsulCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipAllowlist`<sup>Optional</sup> <a name="ipAllowlist" id="@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.ipAllowlist"></a>

```java
public java.lang.Object getIpAllowlist();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStruct">ConsulClusterIpAllowlistStruct</a>>

ip_allowlist block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/consul_cluster#ip_allowlist ConsulCluster#ip_allowlist}

---

##### `minConsulVersion`<sup>Optional</sup> <a name="minConsulVersion" id="@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.minConsulVersion"></a>

```java
public java.lang.String getMinConsulVersion();
```

- *Type:* java.lang.String

The minimum Consul patch version of the cluster.

Allows only the rightmost version component to increment (E.g: `1.13.0` will allow installation of `1.13.2` and `1.13.3` etc., but not `1.14.0`). If not specified, it is defaulted to the version that is currently recommended by HCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/consul_cluster#min_consul_version ConsulCluster#min_consul_version}

---

##### `primaryLink`<sup>Optional</sup> <a name="primaryLink" id="@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.primaryLink"></a>

```java
public java.lang.String getPrimaryLink();
```

- *Type:* java.lang.String

The `self_link` of the HCP Consul cluster which is the primary in the federation setup with this HCP Consul cluster.

If not specified, it is a standalone cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/consul_cluster#primary_link ConsulCluster#primary_link}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

The ID of the HCP project where the HCP Consul cluster is located.

If not specified, the project specified in the HCP Provider config block will be used, if configured.
If a project is not configured in the HCP Provider config block, the oldest project in the organization will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/consul_cluster#project_id ConsulCluster#project_id}

---

##### `publicEndpoint`<sup>Optional</sup> <a name="publicEndpoint" id="@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.publicEndpoint"></a>

```java
public java.lang.Object getPublicEndpoint();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Denotes that the cluster has a public endpoint for the Consul UI. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/consul_cluster#public_endpoint ConsulCluster#public_endpoint}

---

##### `size`<sup>Optional</sup> <a name="size" id="@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.size"></a>

```java
public java.lang.String getSize();
```

- *Type:* java.lang.String

The t-shirt size representation of each server VM that this Consul cluster is provisioned with.

Valid option for development tier - `x_small`. Valid options for other tiers - `small`, `medium`, `large`. For more details - https://cloud.hashicorp.com/pricing/consul. Upgrading the size of a cluster after creation is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/consul_cluster#size ConsulCluster#size}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.timeouts"></a>

```java
public ConsulClusterTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeouts">ConsulClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/consul_cluster#timeouts ConsulCluster#timeouts}

---

### ConsulClusterIpAllowlistStruct <a name="ConsulClusterIpAllowlistStruct" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStruct.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.consul_cluster.ConsulClusterIpAllowlistStruct;

ConsulClusterIpAllowlistStruct.builder()
    .address(java.lang.String)
//  .description(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStruct.property.address">address</a></code> | <code>java.lang.String</code> | IP address range in CIDR notation. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStruct.property.description">description</a></code> | <code>java.lang.String</code> | Description to help identify source (maximum 255 chars). |

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStruct.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

IP address range in CIDR notation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/consul_cluster#address ConsulCluster#address}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStruct.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description to help identify source (maximum 255 chars).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/consul_cluster#description ConsulCluster#description}

---

### ConsulClusterTimeouts <a name="ConsulClusterTimeouts" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.consul_cluster.ConsulClusterTimeouts;

ConsulClusterTimeouts.builder()
//  .create(java.lang.String)
//  .default(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/consul_cluster#create ConsulCluster#create}. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeouts.property.default">default</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/consul_cluster#default ConsulCluster#default}. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/consul_cluster#delete ConsulCluster#delete}. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/consul_cluster#update ConsulCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/consul_cluster#create ConsulCluster#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeouts.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/consul_cluster#default ConsulCluster#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/consul_cluster#delete ConsulCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/consul_cluster#update ConsulCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ConsulClusterIpAllowlistStructList <a name="ConsulClusterIpAllowlistStructList" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.consul_cluster.ConsulClusterIpAllowlistStructList;

new ConsulClusterIpAllowlistStructList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.get"></a>

```java
public ConsulClusterIpAllowlistStructOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStruct">ConsulClusterIpAllowlistStruct</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStruct">ConsulClusterIpAllowlistStruct</a>>

---


### ConsulClusterIpAllowlistStructOutputReference <a name="ConsulClusterIpAllowlistStructOutputReference" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.consul_cluster.ConsulClusterIpAllowlistStructOutputReference;

new ConsulClusterIpAllowlistStructOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.resetDescription"></a>

```java
public void resetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.property.addressInput">addressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStruct">ConsulClusterIpAllowlistStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.property.addressInput"></a>

```java
public java.lang.String getAddressInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStruct">ConsulClusterIpAllowlistStruct</a>

---


### ConsulClusterTimeoutsOutputReference <a name="ConsulClusterTimeoutsOutputReference" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.consul_cluster.ConsulClusterTimeoutsOutputReference;

new ConsulClusterTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.resetDefault">resetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDefault` <a name="resetDefault" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.resetDefault"></a>

```java
public void resetDefault()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.property.defaultInput">defaultInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeouts">ConsulClusterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.property.defaultInput"></a>

```java
public java.lang.String getDefaultInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeouts">ConsulClusterTimeouts</a>

---



