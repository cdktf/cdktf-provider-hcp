# `waypointAddOn` Submodule <a name="`waypointAddOn` Submodule" id="@cdktf/provider-hcp.waypointAddOn"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WaypointAddOn <a name="WaypointAddOn" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/waypoint_add_on hcp_waypoint_add_on}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.waypoint_add_on.WaypointAddOn;

WaypointAddOn.Builder.create(Construct scope, java.lang.String id)
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
    .applicationId(java.lang.String)
    .definitionId(java.lang.String)
    .name(java.lang.String)
//  .addOnInputVariables(IResolvable)
//  .addOnInputVariables(java.util.List<WaypointAddOnAddOnInputVariables>)
//  .projectId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.Initializer.parameter.applicationId">applicationId</a></code> | <code>java.lang.String</code> | The ID of the Application that this Add-on is created for. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.Initializer.parameter.definitionId">definitionId</a></code> | <code>java.lang.String</code> | The ID of the Add-on Definition that this Add-on is created from. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the Add-on. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.Initializer.parameter.addOnInputVariables">addOnInputVariables</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariables">WaypointAddOnAddOnInputVariables</a>></code> | Input variables set for the add-on. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | The ID of the HCP project where the Waypoint AddOn is located. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.Initializer.parameter.applicationId"></a>

- *Type:* java.lang.String

The ID of the Application that this Add-on is created for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/waypoint_add_on#application_id WaypointAddOn#application_id}

---

##### `definitionId`<sup>Required</sup> <a name="definitionId" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.Initializer.parameter.definitionId"></a>

- *Type:* java.lang.String

The ID of the Add-on Definition that this Add-on is created from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/waypoint_add_on#definition_id WaypointAddOn#definition_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the Add-on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/waypoint_add_on#name WaypointAddOn#name}

---

##### `addOnInputVariables`<sup>Optional</sup> <a name="addOnInputVariables" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.Initializer.parameter.addOnInputVariables"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariables">WaypointAddOnAddOnInputVariables</a>>

Input variables set for the add-on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/waypoint_add_on#add_on_input_variables WaypointAddOn#add_on_input_variables}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

The ID of the HCP project where the Waypoint AddOn is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/waypoint_add_on#project_id WaypointAddOn#project_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.putAddOnInputVariables">putAddOnInputVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.resetAddOnInputVariables">resetAddOnInputVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.resetProjectId">resetProjectId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAddOnInputVariables` <a name="putAddOnInputVariables" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.putAddOnInputVariables"></a>

```java
public void putAddOnInputVariables(IResolvable OR java.util.List<WaypointAddOnAddOnInputVariables> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.putAddOnInputVariables.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariables">WaypointAddOnAddOnInputVariables</a>>

---

##### `resetAddOnInputVariables` <a name="resetAddOnInputVariables" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.resetAddOnInputVariables"></a>

```java
public void resetAddOnInputVariables()
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.resetProjectId"></a>

```java
public void resetProjectId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a WaypointAddOn resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.hcp.waypoint_add_on.WaypointAddOn;

WaypointAddOn.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.hcp.waypoint_add_on.WaypointAddOn;

WaypointAddOn.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.hcp.waypoint_add_on.WaypointAddOn;

WaypointAddOn.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.hcp.waypoint_add_on.WaypointAddOn;

WaypointAddOn.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),WaypointAddOn.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a WaypointAddOn resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the WaypointAddOn to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing WaypointAddOn that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/waypoint_add_on#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the WaypointAddOn to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.addOnDefinitionInputVariables">addOnDefinitionInputVariables</a></code> | <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesList">WaypointAddOnAddOnDefinitionInputVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.addOnInputVariables">addOnInputVariables</a></code> | <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesList">WaypointAddOnAddOnInputVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.createdBy">createdBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.installCount">installCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.labels">labels</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.organizationId">organizationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.outputValues">outputValues</a></code> | <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesList">WaypointAddOnOutputValuesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.readmeMarkdown">readmeMarkdown</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.status">status</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.summary">summary</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.terraformNoCodeModuleSource">terraformNoCodeModuleSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.addOnInputVariablesInput">addOnInputVariablesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariables">WaypointAddOnAddOnInputVariables</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.applicationIdInput">applicationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.definitionIdInput">definitionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.definitionId">definitionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `addOnDefinitionInputVariables`<sup>Required</sup> <a name="addOnDefinitionInputVariables" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.addOnDefinitionInputVariables"></a>

```java
public WaypointAddOnAddOnDefinitionInputVariablesList getAddOnDefinitionInputVariables();
```

- *Type:* <a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesList">WaypointAddOnAddOnDefinitionInputVariablesList</a>

---

##### `addOnInputVariables`<sup>Required</sup> <a name="addOnInputVariables" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.addOnInputVariables"></a>

```java
public WaypointAddOnAddOnInputVariablesList getAddOnInputVariables();
```

- *Type:* <a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesList">WaypointAddOnAddOnInputVariablesList</a>

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.createdBy"></a>

```java
public java.lang.String getCreatedBy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `installCount`<sup>Required</sup> <a name="installCount" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.installCount"></a>

```java
public java.lang.Number getInstallCount();
```

- *Type:* java.lang.Number

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.labels"></a>

```java
public java.util.List<java.lang.String> getLabels();
```

- *Type:* java.util.List<java.lang.String>

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.organizationId"></a>

```java
public java.lang.String getOrganizationId();
```

- *Type:* java.lang.String

---

##### `outputValues`<sup>Required</sup> <a name="outputValues" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.outputValues"></a>

```java
public WaypointAddOnOutputValuesList getOutputValues();
```

- *Type:* <a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesList">WaypointAddOnOutputValuesList</a>

---

##### `readmeMarkdown`<sup>Required</sup> <a name="readmeMarkdown" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.readmeMarkdown"></a>

```java
public java.lang.String getReadmeMarkdown();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.status"></a>

```java
public java.lang.Number getStatus();
```

- *Type:* java.lang.Number

---

##### `summary`<sup>Required</sup> <a name="summary" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.summary"></a>

```java
public java.lang.String getSummary();
```

- *Type:* java.lang.String

---

##### `terraformNoCodeModuleSource`<sup>Required</sup> <a name="terraformNoCodeModuleSource" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.terraformNoCodeModuleSource"></a>

```java
public java.lang.String getTerraformNoCodeModuleSource();
```

- *Type:* java.lang.String

---

##### `addOnInputVariablesInput`<sup>Optional</sup> <a name="addOnInputVariablesInput" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.addOnInputVariablesInput"></a>

```java
public java.lang.Object getAddOnInputVariablesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariables">WaypointAddOnAddOnInputVariables</a>>

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.applicationIdInput"></a>

```java
public java.lang.String getApplicationIdInput();
```

- *Type:* java.lang.String

---

##### `definitionIdInput`<sup>Optional</sup> <a name="definitionIdInput" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.definitionIdInput"></a>

```java
public java.lang.String getDefinitionIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

---

##### `definitionId`<sup>Required</sup> <a name="definitionId" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.definitionId"></a>

```java
public java.lang.String getDefinitionId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### WaypointAddOnAddOnDefinitionInputVariables <a name="WaypointAddOnAddOnDefinitionInputVariables" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariables"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariables.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.waypoint_add_on.WaypointAddOnAddOnDefinitionInputVariables;

WaypointAddOnAddOnDefinitionInputVariables.builder()
    .name(java.lang.String)
    .value(java.lang.String)
//  .variableType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariables.property.name">name</a></code> | <code>java.lang.String</code> | Variable name. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariables.property.value">value</a></code> | <code>java.lang.String</code> | Variable value. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariables.property.variableType">variableType</a></code> | <code>java.lang.String</code> | Variable type. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariables.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Variable name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/waypoint_add_on#name WaypointAddOn#name}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariables.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Variable value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/waypoint_add_on#value WaypointAddOn#value}

---

##### `variableType`<sup>Optional</sup> <a name="variableType" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariables.property.variableType"></a>

```java
public java.lang.String getVariableType();
```

- *Type:* java.lang.String

Variable type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/waypoint_add_on#variable_type WaypointAddOn#variable_type}

---

### WaypointAddOnAddOnInputVariables <a name="WaypointAddOnAddOnInputVariables" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariables"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariables.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.waypoint_add_on.WaypointAddOnAddOnInputVariables;

WaypointAddOnAddOnInputVariables.builder()
    .name(java.lang.String)
    .value(java.lang.String)
    .variableType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariables.property.name">name</a></code> | <code>java.lang.String</code> | Variable name. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariables.property.value">value</a></code> | <code>java.lang.String</code> | Variable value. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariables.property.variableType">variableType</a></code> | <code>java.lang.String</code> | Variable type. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariables.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Variable name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/waypoint_add_on#name WaypointAddOn#name}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariables.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Variable value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/waypoint_add_on#value WaypointAddOn#value}

---

##### `variableType`<sup>Required</sup> <a name="variableType" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariables.property.variableType"></a>

```java
public java.lang.String getVariableType();
```

- *Type:* java.lang.String

Variable type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/waypoint_add_on#variable_type WaypointAddOn#variable_type}

---

### WaypointAddOnConfig <a name="WaypointAddOnConfig" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.waypoint_add_on.WaypointAddOnConfig;

WaypointAddOnConfig.builder()
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
    .applicationId(java.lang.String)
    .definitionId(java.lang.String)
    .name(java.lang.String)
//  .addOnInputVariables(IResolvable)
//  .addOnInputVariables(java.util.List<WaypointAddOnAddOnInputVariables>)
//  .projectId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnConfig.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | The ID of the Application that this Add-on is created for. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnConfig.property.definitionId">definitionId</a></code> | <code>java.lang.String</code> | The ID of the Add-on Definition that this Add-on is created from. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the Add-on. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnConfig.property.addOnInputVariables">addOnInputVariables</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariables">WaypointAddOnAddOnInputVariables</a>></code> | Input variables set for the add-on. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | The ID of the HCP project where the Waypoint AddOn is located. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnConfig.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

The ID of the Application that this Add-on is created for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/waypoint_add_on#application_id WaypointAddOn#application_id}

---

##### `definitionId`<sup>Required</sup> <a name="definitionId" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnConfig.property.definitionId"></a>

```java
public java.lang.String getDefinitionId();
```

- *Type:* java.lang.String

The ID of the Add-on Definition that this Add-on is created from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/waypoint_add_on#definition_id WaypointAddOn#definition_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the Add-on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/waypoint_add_on#name WaypointAddOn#name}

---

##### `addOnInputVariables`<sup>Optional</sup> <a name="addOnInputVariables" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnConfig.property.addOnInputVariables"></a>

```java
public java.lang.Object getAddOnInputVariables();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariables">WaypointAddOnAddOnInputVariables</a>>

Input variables set for the add-on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/waypoint_add_on#add_on_input_variables WaypointAddOn#add_on_input_variables}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

The ID of the HCP project where the Waypoint AddOn is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/waypoint_add_on#project_id WaypointAddOn#project_id}

---

### WaypointAddOnOutputValues <a name="WaypointAddOnOutputValues" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValues"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValues.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.waypoint_add_on.WaypointAddOnOutputValues;

WaypointAddOnOutputValues.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### WaypointAddOnAddOnDefinitionInputVariablesList <a name="WaypointAddOnAddOnDefinitionInputVariablesList" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.waypoint_add_on.WaypointAddOnAddOnDefinitionInputVariablesList;

new WaypointAddOnAddOnDefinitionInputVariablesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesList.get"></a>

```java
public WaypointAddOnAddOnDefinitionInputVariablesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariables">WaypointAddOnAddOnDefinitionInputVariables</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariables">WaypointAddOnAddOnDefinitionInputVariables</a>>

---


### WaypointAddOnAddOnDefinitionInputVariablesOutputReference <a name="WaypointAddOnAddOnDefinitionInputVariablesOutputReference" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.waypoint_add_on.WaypointAddOnAddOnDefinitionInputVariablesOutputReference;

new WaypointAddOnAddOnDefinitionInputVariablesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.resetVariableType">resetVariableType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVariableType` <a name="resetVariableType" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.resetVariableType"></a>

```java
public void resetVariableType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.property.variableTypeInput">variableTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.property.variableType">variableType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariables">WaypointAddOnAddOnDefinitionInputVariables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `variableTypeInput`<sup>Optional</sup> <a name="variableTypeInput" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.property.variableTypeInput"></a>

```java
public java.lang.String getVariableTypeInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `variableType`<sup>Required</sup> <a name="variableType" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.property.variableType"></a>

```java
public java.lang.String getVariableType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.property.internalValue"></a>

```java
public WaypointAddOnAddOnDefinitionInputVariables getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariables">WaypointAddOnAddOnDefinitionInputVariables</a>

---


### WaypointAddOnAddOnInputVariablesList <a name="WaypointAddOnAddOnInputVariablesList" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.waypoint_add_on.WaypointAddOnAddOnInputVariablesList;

new WaypointAddOnAddOnInputVariablesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesList.get"></a>

```java
public WaypointAddOnAddOnInputVariablesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariables">WaypointAddOnAddOnInputVariables</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariables">WaypointAddOnAddOnInputVariables</a>>

---


### WaypointAddOnAddOnInputVariablesOutputReference <a name="WaypointAddOnAddOnInputVariablesOutputReference" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.waypoint_add_on.WaypointAddOnAddOnInputVariablesOutputReference;

new WaypointAddOnAddOnInputVariablesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.property.variableTypeInput">variableTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.property.variableType">variableType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariables">WaypointAddOnAddOnInputVariables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `variableTypeInput`<sup>Optional</sup> <a name="variableTypeInput" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.property.variableTypeInput"></a>

```java
public java.lang.String getVariableTypeInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `variableType`<sup>Required</sup> <a name="variableType" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.property.variableType"></a>

```java
public java.lang.String getVariableType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariables">WaypointAddOnAddOnInputVariables</a>

---


### WaypointAddOnOutputValuesList <a name="WaypointAddOnOutputValuesList" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.waypoint_add_on.WaypointAddOnOutputValuesList;

new WaypointAddOnOutputValuesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesList.get"></a>

```java
public WaypointAddOnOutputValuesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### WaypointAddOnOutputValuesOutputReference <a name="WaypointAddOnOutputValuesOutputReference" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.waypoint_add_on.WaypointAddOnOutputValuesOutputReference;

new WaypointAddOnOutputValuesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.property.sensitive">sensitive</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValues">WaypointAddOnOutputValues</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `sensitive`<sup>Required</sup> <a name="sensitive" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.property.sensitive"></a>

```java
public IResolvable getSensitive();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.property.internalValue"></a>

```java
public WaypointAddOnOutputValues getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValues">WaypointAddOnOutputValues</a>

---



