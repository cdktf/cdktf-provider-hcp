# `data_hcp_packer_image_iteration`

Refer to the Terraform Registory for docs: [`data_hcp_packer_image_iteration`](https://registry.terraform.io/providers/hashicorp/hcp/0.61.0/docs/data-sources/packer_image_iteration).

# `dataHcpPackerImageIteration` Submodule <a name="`dataHcpPackerImageIteration` Submodule" id="@cdktf/provider-hcp.dataHcpPackerImageIteration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataHcpPackerImageIteration <a name="DataHcpPackerImageIteration" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.61.0/docs/data-sources/packer_image_iteration hcp_packer_image_iteration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.data_hcp_packer_image_iteration.DataHcpPackerImageIteration;

DataHcpPackerImageIteration.Builder.create(Construct scope, java.lang.String id)
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
    .bucketName(java.lang.String)
    .channel(java.lang.String)
//  .id(java.lang.String)
//  .projectId(java.lang.String)
//  .timeouts(DataHcpPackerImageIterationTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.Initializer.parameter.bucketName">bucketName</a></code> | <code>java.lang.String</code> | The slug of the HCP Packer Registry image bucket to pull from. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.Initializer.parameter.channel">channel</a></code> | <code>java.lang.String</code> | The channel that points to the version of the image you want. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.61.0/docs/data-sources/packer_image_iteration#id DataHcpPackerImageIteration#id}. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | The ID of the HCP project where the HCP Packer registry is located. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeouts">DataHcpPackerImageIterationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.Initializer.parameter.bucketName"></a>

- *Type:* java.lang.String

The slug of the HCP Packer Registry image bucket to pull from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.61.0/docs/data-sources/packer_image_iteration#bucket_name DataHcpPackerImageIteration#bucket_name}

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.Initializer.parameter.channel"></a>

- *Type:* java.lang.String

The channel that points to the version of the image you want.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.61.0/docs/data-sources/packer_image_iteration#channel DataHcpPackerImageIteration#channel}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.61.0/docs/data-sources/packer_image_iteration#id DataHcpPackerImageIteration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

The ID of the HCP project where the HCP Packer registry is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.61.0/docs/data-sources/packer_image_iteration#project_id DataHcpPackerImageIteration#project_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeouts">DataHcpPackerImageIterationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.61.0/docs/data-sources/packer_image_iteration#timeouts DataHcpPackerImageIteration#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.putTimeouts"></a>

```java
public void putTimeouts(DataHcpPackerImageIterationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeouts">DataHcpPackerImageIterationTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.resetId"></a>

```java
public void resetId()
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.resetProjectId"></a>

```java
public void resetProjectId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.hcp.data_hcp_packer_image_iteration.DataHcpPackerImageIteration;

DataHcpPackerImageIteration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.hcp.data_hcp_packer_image_iteration.DataHcpPackerImageIteration;

DataHcpPackerImageIteration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.hcp.data_hcp_packer_image_iteration.DataHcpPackerImageIteration;

DataHcpPackerImageIteration.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.builds">builds</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsList">DataHcpPackerImageIterationBuildsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.incrementalVersion">incrementalVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.organizationId">organizationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.revokeAt">revokeAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference">DataHcpPackerImageIterationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.bucketNameInput">bucketNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.channelInput">channelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeouts">DataHcpPackerImageIterationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.channel">channel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `builds`<sup>Required</sup> <a name="builds" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.builds"></a>

```java
public DataHcpPackerImageIterationBuildsList getBuilds();
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsList">DataHcpPackerImageIterationBuildsList</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `incrementalVersion`<sup>Required</sup> <a name="incrementalVersion" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.incrementalVersion"></a>

```java
public java.lang.Number getIncrementalVersion();
```

- *Type:* java.lang.Number

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.organizationId"></a>

```java
public java.lang.String getOrganizationId();
```

- *Type:* java.lang.String

---

##### `revokeAt`<sup>Required</sup> <a name="revokeAt" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.revokeAt"></a>

```java
public java.lang.String getRevokeAt();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.timeouts"></a>

```java
public DataHcpPackerImageIterationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference">DataHcpPackerImageIterationTimeoutsOutputReference</a>

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.bucketNameInput"></a>

```java
public java.lang.String getBucketNameInput();
```

- *Type:* java.lang.String

---

##### `channelInput`<sup>Optional</sup> <a name="channelInput" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.channelInput"></a>

```java
public java.lang.String getChannelInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeouts">DataHcpPackerImageIterationTimeouts</a>

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.channel"></a>

```java
public java.lang.String getChannel();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIteration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataHcpPackerImageIterationBuilds <a name="DataHcpPackerImageIterationBuilds" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuilds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuilds.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.data_hcp_packer_image_iteration.DataHcpPackerImageIterationBuilds;

DataHcpPackerImageIterationBuilds.builder()
    .build();
```


### DataHcpPackerImageIterationBuildsImages <a name="DataHcpPackerImageIterationBuildsImages" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImages.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.data_hcp_packer_image_iteration.DataHcpPackerImageIterationBuildsImages;

DataHcpPackerImageIterationBuildsImages.builder()
    .build();
```


### DataHcpPackerImageIterationConfig <a name="DataHcpPackerImageIterationConfig" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.data_hcp_packer_image_iteration.DataHcpPackerImageIterationConfig;

DataHcpPackerImageIterationConfig.builder()
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
    .bucketName(java.lang.String)
    .channel(java.lang.String)
//  .id(java.lang.String)
//  .projectId(java.lang.String)
//  .timeouts(DataHcpPackerImageIterationTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationConfig.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | The slug of the HCP Packer Registry image bucket to pull from. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationConfig.property.channel">channel</a></code> | <code>java.lang.String</code> | The channel that points to the version of the image you want. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.61.0/docs/data-sources/packer_image_iteration#id DataHcpPackerImageIteration#id}. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | The ID of the HCP project where the HCP Packer registry is located. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeouts">DataHcpPackerImageIterationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationConfig.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

The slug of the HCP Packer Registry image bucket to pull from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.61.0/docs/data-sources/packer_image_iteration#bucket_name DataHcpPackerImageIteration#bucket_name}

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationConfig.property.channel"></a>

```java
public java.lang.String getChannel();
```

- *Type:* java.lang.String

The channel that points to the version of the image you want.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.61.0/docs/data-sources/packer_image_iteration#channel DataHcpPackerImageIteration#channel}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.61.0/docs/data-sources/packer_image_iteration#id DataHcpPackerImageIteration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

The ID of the HCP project where the HCP Packer registry is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.61.0/docs/data-sources/packer_image_iteration#project_id DataHcpPackerImageIteration#project_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationConfig.property.timeouts"></a>

```java
public DataHcpPackerImageIterationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeouts">DataHcpPackerImageIterationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.61.0/docs/data-sources/packer_image_iteration#timeouts DataHcpPackerImageIteration#timeouts}

---

### DataHcpPackerImageIterationTimeouts <a name="DataHcpPackerImageIterationTimeouts" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.data_hcp_packer_image_iteration.DataHcpPackerImageIterationTimeouts;

DataHcpPackerImageIterationTimeouts.builder()
//  .default(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeouts.property.default">default</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.61.0/docs/data-sources/packer_image_iteration#default DataHcpPackerImageIteration#default}. |

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeouts.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.61.0/docs/data-sources/packer_image_iteration#default DataHcpPackerImageIteration#default}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataHcpPackerImageIterationBuildsImagesList <a name="DataHcpPackerImageIterationBuildsImagesList" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.data_hcp_packer_image_iteration.DataHcpPackerImageIterationBuildsImagesList;

new DataHcpPackerImageIterationBuildsImagesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesList.get"></a>

```java
public DataHcpPackerImageIterationBuildsImagesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataHcpPackerImageIterationBuildsImagesOutputReference <a name="DataHcpPackerImageIterationBuildsImagesOutputReference" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.data_hcp_packer_image_iteration.DataHcpPackerImageIterationBuildsImagesOutputReference;

new DataHcpPackerImageIterationBuildsImagesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.property.imageId">imageId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImages">DataHcpPackerImageIterationBuildsImages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.property.imageId"></a>

```java
public java.lang.String getImageId();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesOutputReference.property.internalValue"></a>

```java
public DataHcpPackerImageIterationBuildsImages getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImages">DataHcpPackerImageIterationBuildsImages</a>

---


### DataHcpPackerImageIterationBuildsList <a name="DataHcpPackerImageIterationBuildsList" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.data_hcp_packer_image_iteration.DataHcpPackerImageIterationBuildsList;

new DataHcpPackerImageIterationBuildsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsList.get"></a>

```java
public DataHcpPackerImageIterationBuildsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataHcpPackerImageIterationBuildsOutputReference <a name="DataHcpPackerImageIterationBuildsOutputReference" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.data_hcp_packer_image_iteration.DataHcpPackerImageIterationBuildsOutputReference;

new DataHcpPackerImageIterationBuildsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.property.cloudProvider">cloudProvider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.property.componentType">componentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.property.images">images</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesList">DataHcpPackerImageIterationBuildsImagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.property.labels">labels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.property.packerRunUuid">packerRunUuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuilds">DataHcpPackerImageIterationBuilds</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudProvider`<sup>Required</sup> <a name="cloudProvider" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.property.cloudProvider"></a>

```java
public java.lang.String getCloudProvider();
```

- *Type:* java.lang.String

---

##### `componentType`<sup>Required</sup> <a name="componentType" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.property.componentType"></a>

```java
public java.lang.String getComponentType();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `images`<sup>Required</sup> <a name="images" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.property.images"></a>

```java
public DataHcpPackerImageIterationBuildsImagesList getImages();
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsImagesList">DataHcpPackerImageIterationBuildsImagesList</a>

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.property.labels"></a>

```java
public StringMap getLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `packerRunUuid`<sup>Required</sup> <a name="packerRunUuid" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.property.packerRunUuid"></a>

```java
public java.lang.String getPackerRunUuid();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuildsOutputReference.property.internalValue"></a>

```java
public DataHcpPackerImageIterationBuilds getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationBuilds">DataHcpPackerImageIterationBuilds</a>

---


### DataHcpPackerImageIterationTimeoutsOutputReference <a name="DataHcpPackerImageIterationTimeoutsOutputReference" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.data_hcp_packer_image_iteration.DataHcpPackerImageIterationTimeoutsOutputReference;

new DataHcpPackerImageIterationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.resetDefault">resetDefault</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefault` <a name="resetDefault" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.resetDefault"></a>

```java
public void resetDefault()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.property.defaultInput">defaultInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeouts">DataHcpPackerImageIterationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.property.defaultInput"></a>

```java
public java.lang.String getDefaultInput();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-hcp.dataHcpPackerImageIteration.DataHcpPackerImageIterationTimeouts">DataHcpPackerImageIterationTimeouts</a>

---



