# `dataHcpWaypointApplicationTemplate` Submodule <a name="`dataHcpWaypointApplicationTemplate` Submodule" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataHcpWaypointApplicationTemplate <a name="DataHcpWaypointApplicationTemplate" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.91.0/docs/data-sources/waypoint_application_template hcp_waypoint_application_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.data_hcp_waypoint_application_template.DataHcpWaypointApplicationTemplate;

DataHcpWaypointApplicationTemplate.Builder.create(Construct scope, java.lang.String id)
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
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .projectId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The ID of the Application Template. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the Application Template. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | The ID of the HCP project where the Waypoint Application Template is located. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The ID of the Application Template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.91.0/docs/data-sources/waypoint_application_template#id DataHcpWaypointApplicationTemplate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the Application Template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.91.0/docs/data-sources/waypoint_application_template#name DataHcpWaypointApplicationTemplate#name}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

The ID of the HCP project where the Waypoint Application Template is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.91.0/docs/data-sources/waypoint_application_template#project_id DataHcpWaypointApplicationTemplate#project_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.resetProjectId">resetProjectId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.resetId"></a>

```java
public void resetId()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.resetName"></a>

```java
public void resetName()
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.resetProjectId"></a>

```java
public void resetProjectId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataHcpWaypointApplicationTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.hcp.data_hcp_waypoint_application_template.DataHcpWaypointApplicationTemplate;

DataHcpWaypointApplicationTemplate.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.hcp.data_hcp_waypoint_application_template.DataHcpWaypointApplicationTemplate;

DataHcpWaypointApplicationTemplate.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.hcp.data_hcp_waypoint_application_template.DataHcpWaypointApplicationTemplate;

DataHcpWaypointApplicationTemplate.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.hcp.data_hcp_waypoint_application_template.DataHcpWaypointApplicationTemplate;

DataHcpWaypointApplicationTemplate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataHcpWaypointApplicationTemplate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataHcpWaypointApplicationTemplate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataHcpWaypointApplicationTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataHcpWaypointApplicationTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.91.0/docs/data-sources/waypoint_application_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataHcpWaypointApplicationTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.labels">labels</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.organizationId">organizationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.readmeMarkdownTemplate">readmeMarkdownTemplate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.summary">summary</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.terraformCloudWorkspaceDetails">terraformCloudWorkspaceDetails</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference">DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.terraformNoCodeModule">terraformNoCodeModule</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference">DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.variableOptions">variableOptions</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateVariableOptionsList">DataHcpWaypointApplicationTemplateVariableOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.labels"></a>

```java
public java.util.List<java.lang.String> getLabels();
```

- *Type:* java.util.List<java.lang.String>

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.organizationId"></a>

```java
public java.lang.String getOrganizationId();
```

- *Type:* java.lang.String

---

##### `readmeMarkdownTemplate`<sup>Required</sup> <a name="readmeMarkdownTemplate" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.readmeMarkdownTemplate"></a>

```java
public java.lang.String getReadmeMarkdownTemplate();
```

- *Type:* java.lang.String

---

##### `summary`<sup>Required</sup> <a name="summary" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.summary"></a>

```java
public java.lang.String getSummary();
```

- *Type:* java.lang.String

---

##### `terraformCloudWorkspaceDetails`<sup>Required</sup> <a name="terraformCloudWorkspaceDetails" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.terraformCloudWorkspaceDetails"></a>

```java
public DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference getTerraformCloudWorkspaceDetails();
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference">DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference</a>

---

##### `terraformNoCodeModule`<sup>Required</sup> <a name="terraformNoCodeModule" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.terraformNoCodeModule"></a>

```java
public DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference getTerraformNoCodeModule();
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference">DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference</a>

---

##### `variableOptions`<sup>Required</sup> <a name="variableOptions" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.variableOptions"></a>

```java
public DataHcpWaypointApplicationTemplateVariableOptionsList getVariableOptions();
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateVariableOptionsList">DataHcpWaypointApplicationTemplateVariableOptionsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataHcpWaypointApplicationTemplateConfig <a name="DataHcpWaypointApplicationTemplateConfig" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.data_hcp_waypoint_application_template.DataHcpWaypointApplicationTemplateConfig;

DataHcpWaypointApplicationTemplateConfig.builder()
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
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .projectId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateConfig.property.id">id</a></code> | <code>java.lang.String</code> | The ID of the Application Template. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the Application Template. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | The ID of the HCP project where the Waypoint Application Template is located. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

The ID of the Application Template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.91.0/docs/data-sources/waypoint_application_template#id DataHcpWaypointApplicationTemplate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the Application Template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.91.0/docs/data-sources/waypoint_application_template#name DataHcpWaypointApplicationTemplate#name}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

The ID of the HCP project where the Waypoint Application Template is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.91.0/docs/data-sources/waypoint_application_template#project_id DataHcpWaypointApplicationTemplate#project_id}

---

### DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetails <a name="DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetails" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.data_hcp_waypoint_application_template.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetails;

DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetails.builder()
    .build();
```


### DataHcpWaypointApplicationTemplateTerraformNoCodeModule <a name="DataHcpWaypointApplicationTemplateTerraformNoCodeModule" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.data_hcp_waypoint_application_template.DataHcpWaypointApplicationTemplateTerraformNoCodeModule;

DataHcpWaypointApplicationTemplateTerraformNoCodeModule.builder()
    .build();
```


### DataHcpWaypointApplicationTemplateVariableOptions <a name="DataHcpWaypointApplicationTemplateVariableOptions" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateVariableOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateVariableOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.data_hcp_waypoint_application_template.DataHcpWaypointApplicationTemplateVariableOptions;

DataHcpWaypointApplicationTemplateVariableOptions.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference <a name="DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.data_hcp_waypoint_application_template.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference;

new DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.property.terraformProjectId">terraformProjectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetails">DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `terraformProjectId`<sup>Required</sup> <a name="terraformProjectId" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.property.terraformProjectId"></a>

```java
public java.lang.String getTerraformProjectId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.property.internalValue"></a>

```java
public DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetails getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetails">DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetails</a>

---


### DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference <a name="DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.data_hcp_waypoint_application_template.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference;

new DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModule">DataHcpWaypointApplicationTemplateTerraformNoCodeModule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.property.internalValue"></a>

```java
public DataHcpWaypointApplicationTemplateTerraformNoCodeModule getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModule">DataHcpWaypointApplicationTemplateTerraformNoCodeModule</a>

---


### DataHcpWaypointApplicationTemplateVariableOptionsList <a name="DataHcpWaypointApplicationTemplateVariableOptionsList" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateVariableOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateVariableOptionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.data_hcp_waypoint_application_template.DataHcpWaypointApplicationTemplateVariableOptionsList;

new DataHcpWaypointApplicationTemplateVariableOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateVariableOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateVariableOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateVariableOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateVariableOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateVariableOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateVariableOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateVariableOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateVariableOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateVariableOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateVariableOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateVariableOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateVariableOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateVariableOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateVariableOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateVariableOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateVariableOptionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateVariableOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateVariableOptionsList.get"></a>

```java
public DataHcpWaypointApplicationTemplateVariableOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateVariableOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateVariableOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateVariableOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateVariableOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateVariableOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataHcpWaypointApplicationTemplateVariableOptionsOutputReference <a name="DataHcpWaypointApplicationTemplateVariableOptionsOutputReference" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateVariableOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateVariableOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.data_hcp_waypoint_application_template.DataHcpWaypointApplicationTemplateVariableOptionsOutputReference;

new DataHcpWaypointApplicationTemplateVariableOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateVariableOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateVariableOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateVariableOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateVariableOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateVariableOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateVariableOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateVariableOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateVariableOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateVariableOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateVariableOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateVariableOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateVariableOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateVariableOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateVariableOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateVariableOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateVariableOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateVariableOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateVariableOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateVariableOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateVariableOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateVariableOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateVariableOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateVariableOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateVariableOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateVariableOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateVariableOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateVariableOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateVariableOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateVariableOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateVariableOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateVariableOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateVariableOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateVariableOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateVariableOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateVariableOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateVariableOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateVariableOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateVariableOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateVariableOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateVariableOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateVariableOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateVariableOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateVariableOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateVariableOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateVariableOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateVariableOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateVariableOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateVariableOptionsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateVariableOptionsOutputReference.property.options">options</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateVariableOptionsOutputReference.property.userEditable">userEditable</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateVariableOptionsOutputReference.property.variableType">variableType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateVariableOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateVariableOptions">DataHcpWaypointApplicationTemplateVariableOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateVariableOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateVariableOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateVariableOptionsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateVariableOptionsOutputReference.property.options"></a>

```java
public java.util.List<java.lang.String> getOptions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `userEditable`<sup>Required</sup> <a name="userEditable" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateVariableOptionsOutputReference.property.userEditable"></a>

```java
public IResolvable getUserEditable();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `variableType`<sup>Required</sup> <a name="variableType" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateVariableOptionsOutputReference.property.variableType"></a>

```java
public java.lang.String getVariableType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateVariableOptionsOutputReference.property.internalValue"></a>

```java
public DataHcpWaypointApplicationTemplateVariableOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateVariableOptions">DataHcpWaypointApplicationTemplateVariableOptions</a>

---



