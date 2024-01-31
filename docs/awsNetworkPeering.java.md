# `awsNetworkPeering` Submodule <a name="`awsNetworkPeering` Submodule" id="@cdktf/provider-hcp.awsNetworkPeering"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AwsNetworkPeering <a name="AwsNetworkPeering" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.82.0/docs/resources/aws_network_peering hcp_aws_network_peering}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.aws_network_peering.AwsNetworkPeering;

AwsNetworkPeering.Builder.create(Construct scope, java.lang.String id)
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
    .hvnId(java.lang.String)
    .peerAccountId(java.lang.String)
    .peeringId(java.lang.String)
    .peerVpcId(java.lang.String)
    .peerVpcRegion(java.lang.String)
//  .id(java.lang.String)
//  .projectId(java.lang.String)
//  .timeouts(AwsNetworkPeeringTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.Initializer.parameter.hvnId">hvnId</a></code> | <code>java.lang.String</code> | The ID of the HashiCorp Virtual Network (HVN). |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.Initializer.parameter.peerAccountId">peerAccountId</a></code> | <code>java.lang.String</code> | The account ID of the peer VPC in AWS. |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.Initializer.parameter.peeringId">peeringId</a></code> | <code>java.lang.String</code> | The ID of the network peering. |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.Initializer.parameter.peerVpcId">peerVpcId</a></code> | <code>java.lang.String</code> | The ID of the peer VPC in AWS. |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.Initializer.parameter.peerVpcRegion">peerVpcRegion</a></code> | <code>java.lang.String</code> | The region of the peer VPC in AWS. |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.82.0/docs/resources/aws_network_peering#id AwsNetworkPeering#id}. |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | The ID of the HCP project where the network peering is located. |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeouts">AwsNetworkPeeringTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `hvnId`<sup>Required</sup> <a name="hvnId" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.Initializer.parameter.hvnId"></a>

- *Type:* java.lang.String

The ID of the HashiCorp Virtual Network (HVN).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.82.0/docs/resources/aws_network_peering#hvn_id AwsNetworkPeering#hvn_id}

---

##### `peerAccountId`<sup>Required</sup> <a name="peerAccountId" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.Initializer.parameter.peerAccountId"></a>

- *Type:* java.lang.String

The account ID of the peer VPC in AWS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.82.0/docs/resources/aws_network_peering#peer_account_id AwsNetworkPeering#peer_account_id}

---

##### `peeringId`<sup>Required</sup> <a name="peeringId" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.Initializer.parameter.peeringId"></a>

- *Type:* java.lang.String

The ID of the network peering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.82.0/docs/resources/aws_network_peering#peering_id AwsNetworkPeering#peering_id}

---

##### `peerVpcId`<sup>Required</sup> <a name="peerVpcId" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.Initializer.parameter.peerVpcId"></a>

- *Type:* java.lang.String

The ID of the peer VPC in AWS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.82.0/docs/resources/aws_network_peering#peer_vpc_id AwsNetworkPeering#peer_vpc_id}

---

##### `peerVpcRegion`<sup>Required</sup> <a name="peerVpcRegion" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.Initializer.parameter.peerVpcRegion"></a>

- *Type:* java.lang.String

The region of the peer VPC in AWS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.82.0/docs/resources/aws_network_peering#peer_vpc_region AwsNetworkPeering#peer_vpc_region}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.82.0/docs/resources/aws_network_peering#id AwsNetworkPeering#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

The ID of the HCP project where the network peering is located.

Always matches the HVN's project.
If not specified, the project specified in the HCP Provider config block will be used, if configured.
If a project is not configured in the HCP Provider config block, the oldest project in the organization will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.82.0/docs/resources/aws_network_peering#project_id AwsNetworkPeering#project_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeouts">AwsNetworkPeeringTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.82.0/docs/resources/aws_network_peering#timeouts AwsNetworkPeering#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.putTimeouts"></a>

```java
public void putTimeouts(AwsNetworkPeeringTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeouts">AwsNetworkPeeringTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.resetId"></a>

```java
public void resetId()
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.resetProjectId"></a>

```java
public void resetProjectId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AwsNetworkPeering resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.hcp.aws_network_peering.AwsNetworkPeering;

AwsNetworkPeering.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.hcp.aws_network_peering.AwsNetworkPeering;

AwsNetworkPeering.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.hcp.aws_network_peering.AwsNetworkPeering;

AwsNetworkPeering.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.hcp.aws_network_peering.AwsNetworkPeering;

AwsNetworkPeering.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AwsNetworkPeering.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a AwsNetworkPeering resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AwsNetworkPeering to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AwsNetworkPeering that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.82.0/docs/resources/aws_network_peering#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the AwsNetworkPeering to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.expiresAt">expiresAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.organizationId">organizationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.providerPeeringId">providerPeeringId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference">AwsNetworkPeeringTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.hvnIdInput">hvnIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.peerAccountIdInput">peerAccountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.peeringIdInput">peeringIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.peerVpcIdInput">peerVpcIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.peerVpcRegionInput">peerVpcRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeouts">AwsNetworkPeeringTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.hvnId">hvnId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.peerAccountId">peerAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.peeringId">peeringId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.peerVpcId">peerVpcId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.peerVpcRegion">peerVpcRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `expiresAt`<sup>Required</sup> <a name="expiresAt" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.expiresAt"></a>

```java
public java.lang.String getExpiresAt();
```

- *Type:* java.lang.String

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.organizationId"></a>

```java
public java.lang.String getOrganizationId();
```

- *Type:* java.lang.String

---

##### `providerPeeringId`<sup>Required</sup> <a name="providerPeeringId" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.providerPeeringId"></a>

```java
public java.lang.String getProviderPeeringId();
```

- *Type:* java.lang.String

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.timeouts"></a>

```java
public AwsNetworkPeeringTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference">AwsNetworkPeeringTimeoutsOutputReference</a>

---

##### `hvnIdInput`<sup>Optional</sup> <a name="hvnIdInput" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.hvnIdInput"></a>

```java
public java.lang.String getHvnIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `peerAccountIdInput`<sup>Optional</sup> <a name="peerAccountIdInput" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.peerAccountIdInput"></a>

```java
public java.lang.String getPeerAccountIdInput();
```

- *Type:* java.lang.String

---

##### `peeringIdInput`<sup>Optional</sup> <a name="peeringIdInput" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.peeringIdInput"></a>

```java
public java.lang.String getPeeringIdInput();
```

- *Type:* java.lang.String

---

##### `peerVpcIdInput`<sup>Optional</sup> <a name="peerVpcIdInput" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.peerVpcIdInput"></a>

```java
public java.lang.String getPeerVpcIdInput();
```

- *Type:* java.lang.String

---

##### `peerVpcRegionInput`<sup>Optional</sup> <a name="peerVpcRegionInput" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.peerVpcRegionInput"></a>

```java
public java.lang.String getPeerVpcRegionInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeouts">AwsNetworkPeeringTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `hvnId`<sup>Required</sup> <a name="hvnId" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.hvnId"></a>

```java
public java.lang.String getHvnId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `peerAccountId`<sup>Required</sup> <a name="peerAccountId" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.peerAccountId"></a>

```java
public java.lang.String getPeerAccountId();
```

- *Type:* java.lang.String

---

##### `peeringId`<sup>Required</sup> <a name="peeringId" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.peeringId"></a>

```java
public java.lang.String getPeeringId();
```

- *Type:* java.lang.String

---

##### `peerVpcId`<sup>Required</sup> <a name="peerVpcId" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.peerVpcId"></a>

```java
public java.lang.String getPeerVpcId();
```

- *Type:* java.lang.String

---

##### `peerVpcRegion`<sup>Required</sup> <a name="peerVpcRegion" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.peerVpcRegion"></a>

```java
public java.lang.String getPeerVpcRegion();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeering.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AwsNetworkPeeringConfig <a name="AwsNetworkPeeringConfig" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.aws_network_peering.AwsNetworkPeeringConfig;

AwsNetworkPeeringConfig.builder()
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
    .hvnId(java.lang.String)
    .peerAccountId(java.lang.String)
    .peeringId(java.lang.String)
    .peerVpcId(java.lang.String)
    .peerVpcRegion(java.lang.String)
//  .id(java.lang.String)
//  .projectId(java.lang.String)
//  .timeouts(AwsNetworkPeeringTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringConfig.property.hvnId">hvnId</a></code> | <code>java.lang.String</code> | The ID of the HashiCorp Virtual Network (HVN). |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringConfig.property.peerAccountId">peerAccountId</a></code> | <code>java.lang.String</code> | The account ID of the peer VPC in AWS. |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringConfig.property.peeringId">peeringId</a></code> | <code>java.lang.String</code> | The ID of the network peering. |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringConfig.property.peerVpcId">peerVpcId</a></code> | <code>java.lang.String</code> | The ID of the peer VPC in AWS. |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringConfig.property.peerVpcRegion">peerVpcRegion</a></code> | <code>java.lang.String</code> | The region of the peer VPC in AWS. |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.82.0/docs/resources/aws_network_peering#id AwsNetworkPeering#id}. |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | The ID of the HCP project where the network peering is located. |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeouts">AwsNetworkPeeringTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `hvnId`<sup>Required</sup> <a name="hvnId" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringConfig.property.hvnId"></a>

```java
public java.lang.String getHvnId();
```

- *Type:* java.lang.String

The ID of the HashiCorp Virtual Network (HVN).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.82.0/docs/resources/aws_network_peering#hvn_id AwsNetworkPeering#hvn_id}

---

##### `peerAccountId`<sup>Required</sup> <a name="peerAccountId" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringConfig.property.peerAccountId"></a>

```java
public java.lang.String getPeerAccountId();
```

- *Type:* java.lang.String

The account ID of the peer VPC in AWS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.82.0/docs/resources/aws_network_peering#peer_account_id AwsNetworkPeering#peer_account_id}

---

##### `peeringId`<sup>Required</sup> <a name="peeringId" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringConfig.property.peeringId"></a>

```java
public java.lang.String getPeeringId();
```

- *Type:* java.lang.String

The ID of the network peering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.82.0/docs/resources/aws_network_peering#peering_id AwsNetworkPeering#peering_id}

---

##### `peerVpcId`<sup>Required</sup> <a name="peerVpcId" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringConfig.property.peerVpcId"></a>

```java
public java.lang.String getPeerVpcId();
```

- *Type:* java.lang.String

The ID of the peer VPC in AWS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.82.0/docs/resources/aws_network_peering#peer_vpc_id AwsNetworkPeering#peer_vpc_id}

---

##### `peerVpcRegion`<sup>Required</sup> <a name="peerVpcRegion" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringConfig.property.peerVpcRegion"></a>

```java
public java.lang.String getPeerVpcRegion();
```

- *Type:* java.lang.String

The region of the peer VPC in AWS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.82.0/docs/resources/aws_network_peering#peer_vpc_region AwsNetworkPeering#peer_vpc_region}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.82.0/docs/resources/aws_network_peering#id AwsNetworkPeering#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

The ID of the HCP project where the network peering is located.

Always matches the HVN's project.
If not specified, the project specified in the HCP Provider config block will be used, if configured.
If a project is not configured in the HCP Provider config block, the oldest project in the organization will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.82.0/docs/resources/aws_network_peering#project_id AwsNetworkPeering#project_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringConfig.property.timeouts"></a>

```java
public AwsNetworkPeeringTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeouts">AwsNetworkPeeringTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.82.0/docs/resources/aws_network_peering#timeouts AwsNetworkPeering#timeouts}

---

### AwsNetworkPeeringTimeouts <a name="AwsNetworkPeeringTimeouts" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.aws_network_peering.AwsNetworkPeeringTimeouts;

AwsNetworkPeeringTimeouts.builder()
//  .create(java.lang.String)
//  .default(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.82.0/docs/resources/aws_network_peering#create AwsNetworkPeering#create}. |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeouts.property.default">default</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.82.0/docs/resources/aws_network_peering#default AwsNetworkPeering#default}. |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.82.0/docs/resources/aws_network_peering#delete AwsNetworkPeering#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.82.0/docs/resources/aws_network_peering#create AwsNetworkPeering#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeouts.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.82.0/docs/resources/aws_network_peering#default AwsNetworkPeering#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.82.0/docs/resources/aws_network_peering#delete AwsNetworkPeering#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### AwsNetworkPeeringTimeoutsOutputReference <a name="AwsNetworkPeeringTimeoutsOutputReference" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.aws_network_peering.AwsNetworkPeeringTimeoutsOutputReference;

new AwsNetworkPeeringTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.resetDefault">resetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDefault` <a name="resetDefault" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.resetDefault"></a>

```java
public void resetDefault()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.property.defaultInput">defaultInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeouts">AwsNetworkPeeringTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.property.defaultInput"></a>

```java
public java.lang.String getDefaultInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-hcp.awsNetworkPeering.AwsNetworkPeeringTimeouts">AwsNetworkPeeringTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



