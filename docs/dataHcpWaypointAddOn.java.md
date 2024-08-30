# `dataHcpWaypointAddOn` Submodule <a name="`dataHcpWaypointAddOn` Submodule" id="@cdktf/provider-hcp.dataHcpWaypointAddOn"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataHcpWaypointAddOn <a name="DataHcpWaypointAddOn" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.1/docs/data-sources/waypoint_add_on hcp_waypoint_add_on}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.data_hcp_waypoint_add_on.DataHcpWaypointAddOn;

DataHcpWaypointAddOn.Builder.create(Construct scope, java.lang.String id)
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
//  .inputVariables(IResolvable)
//  .inputVariables(java.util.List<DataHcpWaypointAddOnInputVariables>)
//  .name(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The ID of the Add-on. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.Initializer.parameter.inputVariables">inputVariables</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariables">DataHcpWaypointAddOnInputVariables</a>></code> | Input variables for the Add-on. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the Add-on. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The ID of the Add-on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.1/docs/data-sources/waypoint_add_on#id DataHcpWaypointAddOn#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inputVariables`<sup>Optional</sup> <a name="inputVariables" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.Initializer.parameter.inputVariables"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariables">DataHcpWaypointAddOnInputVariables</a>>

Input variables for the Add-on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.1/docs/data-sources/waypoint_add_on#input_variables DataHcpWaypointAddOn#input_variables}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the Add-on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.1/docs/data-sources/waypoint_add_on#name DataHcpWaypointAddOn#name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.putInputVariables">putInputVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.resetInputVariables">resetInputVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.resetName">resetName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putInputVariables` <a name="putInputVariables" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.putInputVariables"></a>

```java
public void putInputVariables(IResolvable OR java.util.List<DataHcpWaypointAddOnInputVariables> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.putInputVariables.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariables">DataHcpWaypointAddOnInputVariables</a>>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.resetId"></a>

```java
public void resetId()
```

##### `resetInputVariables` <a name="resetInputVariables" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.resetInputVariables"></a>

```java
public void resetInputVariables()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.resetName"></a>

```java
public void resetName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataHcpWaypointAddOn resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.hcp.data_hcp_waypoint_add_on.DataHcpWaypointAddOn;

DataHcpWaypointAddOn.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.hcp.data_hcp_waypoint_add_on.DataHcpWaypointAddOn;

DataHcpWaypointAddOn.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.hcp.data_hcp_waypoint_add_on.DataHcpWaypointAddOn;

DataHcpWaypointAddOn.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.hcp.data_hcp_waypoint_add_on.DataHcpWaypointAddOn;

DataHcpWaypointAddOn.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataHcpWaypointAddOn.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataHcpWaypointAddOn resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataHcpWaypointAddOn to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataHcpWaypointAddOn that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.1/docs/data-sources/waypoint_add_on#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataHcpWaypointAddOn to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.property.createdBy">createdBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.property.definitionId">definitionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.property.inputVariables">inputVariables</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariablesList">DataHcpWaypointAddOnInputVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.property.installCount">installCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.property.labels">labels</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.property.organizationId">organizationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.property.outputValues">outputValues</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnOutputValuesList">DataHcpWaypointAddOnOutputValuesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.property.readmeMarkdown">readmeMarkdown</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.property.status">status</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.property.summary">summary</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.property.terraformNoCodeModuleSource">terraformNoCodeModuleSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.property.inputVariablesInput">inputVariablesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariables">DataHcpWaypointAddOnInputVariables</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.property.createdBy"></a>

```java
public java.lang.String getCreatedBy();
```

- *Type:* java.lang.String

---

##### `definitionId`<sup>Required</sup> <a name="definitionId" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.property.definitionId"></a>

```java
public java.lang.String getDefinitionId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `inputVariables`<sup>Required</sup> <a name="inputVariables" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.property.inputVariables"></a>

```java
public DataHcpWaypointAddOnInputVariablesList getInputVariables();
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariablesList">DataHcpWaypointAddOnInputVariablesList</a>

---

##### `installCount`<sup>Required</sup> <a name="installCount" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.property.installCount"></a>

```java
public java.lang.Number getInstallCount();
```

- *Type:* java.lang.Number

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.property.labels"></a>

```java
public java.util.List<java.lang.String> getLabels();
```

- *Type:* java.util.List<java.lang.String>

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.property.organizationId"></a>

```java
public java.lang.String getOrganizationId();
```

- *Type:* java.lang.String

---

##### `outputValues`<sup>Required</sup> <a name="outputValues" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.property.outputValues"></a>

```java
public DataHcpWaypointAddOnOutputValuesList getOutputValues();
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnOutputValuesList">DataHcpWaypointAddOnOutputValuesList</a>

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `readmeMarkdown`<sup>Required</sup> <a name="readmeMarkdown" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.property.readmeMarkdown"></a>

```java
public java.lang.String getReadmeMarkdown();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.property.status"></a>

```java
public java.lang.Number getStatus();
```

- *Type:* java.lang.Number

---

##### `summary`<sup>Required</sup> <a name="summary" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.property.summary"></a>

```java
public java.lang.String getSummary();
```

- *Type:* java.lang.String

---

##### `terraformNoCodeModuleSource`<sup>Required</sup> <a name="terraformNoCodeModuleSource" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.property.terraformNoCodeModuleSource"></a>

```java
public java.lang.String getTerraformNoCodeModuleSource();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `inputVariablesInput`<sup>Optional</sup> <a name="inputVariablesInput" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.property.inputVariablesInput"></a>

```java
public java.lang.Object getInputVariablesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariables">DataHcpWaypointAddOnInputVariables</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOn.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataHcpWaypointAddOnConfig <a name="DataHcpWaypointAddOnConfig" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.data_hcp_waypoint_add_on.DataHcpWaypointAddOnConfig;

DataHcpWaypointAddOnConfig.builder()
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
//  .inputVariables(IResolvable)
//  .inputVariables(java.util.List<DataHcpWaypointAddOnInputVariables>)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnConfig.property.id">id</a></code> | <code>java.lang.String</code> | The ID of the Add-on. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnConfig.property.inputVariables">inputVariables</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariables">DataHcpWaypointAddOnInputVariables</a>></code> | Input variables for the Add-on. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the Add-on. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

The ID of the Add-on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.1/docs/data-sources/waypoint_add_on#id DataHcpWaypointAddOn#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inputVariables`<sup>Optional</sup> <a name="inputVariables" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnConfig.property.inputVariables"></a>

```java
public java.lang.Object getInputVariables();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariables">DataHcpWaypointAddOnInputVariables</a>>

Input variables for the Add-on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.1/docs/data-sources/waypoint_add_on#input_variables DataHcpWaypointAddOn#input_variables}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the Add-on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.1/docs/data-sources/waypoint_add_on#name DataHcpWaypointAddOn#name}

---

### DataHcpWaypointAddOnInputVariables <a name="DataHcpWaypointAddOnInputVariables" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariables"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariables.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.data_hcp_waypoint_add_on.DataHcpWaypointAddOnInputVariables;

DataHcpWaypointAddOnInputVariables.builder()
    .build();
```


### DataHcpWaypointAddOnOutputValues <a name="DataHcpWaypointAddOnOutputValues" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnOutputValues"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnOutputValues.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.data_hcp_waypoint_add_on.DataHcpWaypointAddOnOutputValues;

DataHcpWaypointAddOnOutputValues.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataHcpWaypointAddOnInputVariablesList <a name="DataHcpWaypointAddOnInputVariablesList" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariablesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.data_hcp_waypoint_add_on.DataHcpWaypointAddOnInputVariablesList;

new DataHcpWaypointAddOnInputVariablesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariablesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariablesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariablesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariablesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariablesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariablesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariablesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariablesList.get"></a>

```java
public DataHcpWaypointAddOnInputVariablesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariablesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariablesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariablesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariablesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariables">DataHcpWaypointAddOnInputVariables</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariablesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariablesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariablesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariables">DataHcpWaypointAddOnInputVariables</a>>

---


### DataHcpWaypointAddOnInputVariablesOutputReference <a name="DataHcpWaypointAddOnInputVariablesOutputReference" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariablesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.data_hcp_waypoint_add_on.DataHcpWaypointAddOnInputVariablesOutputReference;

new DataHcpWaypointAddOnInputVariablesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariablesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariablesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariablesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariablesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariablesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariablesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariablesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariablesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariablesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariablesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariablesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariablesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariablesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariablesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariablesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariablesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariablesOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariablesOutputReference.property.variableType">variableType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariablesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariables">DataHcpWaypointAddOnInputVariables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariablesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariablesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariablesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariablesOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `variableType`<sup>Required</sup> <a name="variableType" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariablesOutputReference.property.variableType"></a>

```java
public java.lang.String getVariableType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariablesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnInputVariables">DataHcpWaypointAddOnInputVariables</a>

---


### DataHcpWaypointAddOnOutputValuesList <a name="DataHcpWaypointAddOnOutputValuesList" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnOutputValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnOutputValuesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.data_hcp_waypoint_add_on.DataHcpWaypointAddOnOutputValuesList;

new DataHcpWaypointAddOnOutputValuesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnOutputValuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnOutputValuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnOutputValuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnOutputValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnOutputValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnOutputValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnOutputValuesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnOutputValuesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnOutputValuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnOutputValuesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnOutputValuesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnOutputValuesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnOutputValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnOutputValuesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnOutputValuesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnOutputValuesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnOutputValuesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnOutputValuesList.get"></a>

```java
public DataHcpWaypointAddOnOutputValuesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnOutputValuesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnOutputValuesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnOutputValuesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnOutputValuesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnOutputValuesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataHcpWaypointAddOnOutputValuesOutputReference <a name="DataHcpWaypointAddOnOutputValuesOutputReference" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnOutputValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnOutputValuesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.data_hcp_waypoint_add_on.DataHcpWaypointAddOnOutputValuesOutputReference;

new DataHcpWaypointAddOnOutputValuesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnOutputValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnOutputValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnOutputValuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnOutputValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnOutputValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnOutputValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnOutputValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnOutputValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnOutputValuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnOutputValuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnOutputValuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnOutputValuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnOutputValuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnOutputValuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnOutputValuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnOutputValuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnOutputValuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnOutputValuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnOutputValuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnOutputValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnOutputValuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnOutputValuesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnOutputValuesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnOutputValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnOutputValuesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnOutputValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnOutputValuesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnOutputValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnOutputValuesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnOutputValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnOutputValuesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnOutputValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnOutputValuesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnOutputValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnOutputValuesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnOutputValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnOutputValuesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnOutputValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnOutputValuesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnOutputValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnOutputValuesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnOutputValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnOutputValuesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnOutputValuesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnOutputValuesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnOutputValuesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnOutputValuesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnOutputValuesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnOutputValuesOutputReference.property.sensitive">sensitive</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnOutputValuesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnOutputValuesOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnOutputValuesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnOutputValues">DataHcpWaypointAddOnOutputValues</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnOutputValuesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnOutputValuesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnOutputValuesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `sensitive`<sup>Required</sup> <a name="sensitive" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnOutputValuesOutputReference.property.sensitive"></a>

```java
public IResolvable getSensitive();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnOutputValuesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnOutputValuesOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnOutputValuesOutputReference.property.internalValue"></a>

```java
public DataHcpWaypointAddOnOutputValues getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpWaypointAddOn.DataHcpWaypointAddOnOutputValues">DataHcpWaypointAddOnOutputValues</a>

---



