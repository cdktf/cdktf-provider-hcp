# `boundaryCluster` Submodule <a name="`boundaryCluster` Submodule" id="@cdktf/provider-hcp.boundaryCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BoundaryCluster <a name="BoundaryCluster" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.77.0/docs/resources/boundary_cluster hcp_boundary_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.Initializer"></a>

```typescript
import { boundaryCluster } from '@cdktf/provider-hcp'

new boundaryCluster.BoundaryCluster(scope: Construct, id: string, config: BoundaryClusterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterConfig">BoundaryClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterConfig">BoundaryClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.putMaintenanceWindowConfig">putMaintenanceWindowConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.resetMaintenanceWindowConfig">resetMaintenanceWindowConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putMaintenanceWindowConfig` <a name="putMaintenanceWindowConfig" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.putMaintenanceWindowConfig"></a>

```typescript
public putMaintenanceWindowConfig(value: BoundaryClusterMaintenanceWindowConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.putMaintenanceWindowConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfig">BoundaryClusterMaintenanceWindowConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.putTimeouts"></a>

```typescript
public putTimeouts(value: BoundaryClusterTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeouts">BoundaryClusterTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMaintenanceWindowConfig` <a name="resetMaintenanceWindowConfig" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.resetMaintenanceWindowConfig"></a>

```typescript
public resetMaintenanceWindowConfig(): void
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.resetProjectId"></a>

```typescript
public resetProjectId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a BoundaryCluster resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.isConstruct"></a>

```typescript
import { boundaryCluster } from '@cdktf/provider-hcp'

boundaryCluster.BoundaryCluster.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.isTerraformElement"></a>

```typescript
import { boundaryCluster } from '@cdktf/provider-hcp'

boundaryCluster.BoundaryCluster.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.isTerraformResource"></a>

```typescript
import { boundaryCluster } from '@cdktf/provider-hcp'

boundaryCluster.BoundaryCluster.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.generateConfigForImport"></a>

```typescript
import { boundaryCluster } from '@cdktf/provider-hcp'

boundaryCluster.BoundaryCluster.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a BoundaryCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BoundaryCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BoundaryCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.77.0/docs/resources/boundary_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BoundaryCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.clusterUrl">clusterUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.maintenanceWindowConfig">maintenanceWindowConfig</a></code> | <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference">BoundaryClusterMaintenanceWindowConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference">BoundaryClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.clusterIdInput">clusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.maintenanceWindowConfigInput">maintenanceWindowConfigInput</a></code> | <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfig">BoundaryClusterMaintenanceWindowConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.tierInput">tierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeouts">BoundaryClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.clusterId">clusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.tier">tier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.username">username</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterUrl`<sup>Required</sup> <a name="clusterUrl" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.clusterUrl"></a>

```typescript
public readonly clusterUrl: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `maintenanceWindowConfig`<sup>Required</sup> <a name="maintenanceWindowConfig" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.maintenanceWindowConfig"></a>

```typescript
public readonly maintenanceWindowConfig: BoundaryClusterMaintenanceWindowConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference">BoundaryClusterMaintenanceWindowConfigOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.timeouts"></a>

```typescript
public readonly timeouts: BoundaryClusterTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference">BoundaryClusterTimeoutsOutputReference</a>

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.clusterIdInput"></a>

```typescript
public readonly clusterIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `maintenanceWindowConfigInput`<sup>Optional</sup> <a name="maintenanceWindowConfigInput" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.maintenanceWindowConfigInput"></a>

```typescript
public readonly maintenanceWindowConfigInput: BoundaryClusterMaintenanceWindowConfig;
```

- *Type:* <a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfig">BoundaryClusterMaintenanceWindowConfig</a>

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `tierInput`<sup>Optional</sup> <a name="tierInput" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.tierInput"></a>

```typescript
public readonly tierInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | BoundaryClusterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeouts">BoundaryClusterTimeouts</a>

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.tier"></a>

```typescript
public readonly tier: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-hcp.boundaryCluster.BoundaryCluster.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BoundaryClusterConfig <a name="BoundaryClusterConfig" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterConfig.Initializer"></a>

```typescript
import { boundaryCluster } from '@cdktf/provider-hcp'

const boundaryClusterConfig: boundaryCluster.BoundaryClusterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterConfig.property.clusterId">clusterId</a></code> | <code>string</code> | The ID of the Boundary cluster. |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterConfig.property.password">password</a></code> | <code>string</code> | The password of the initial admin user. |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterConfig.property.tier">tier</a></code> | <code>string</code> | The tier that the HCP Boundary cluster will be provisioned as, 'Standard' or 'Plus'. |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterConfig.property.username">username</a></code> | <code>string</code> | The username of the initial admin user. |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.77.0/docs/resources/boundary_cluster#id BoundaryCluster#id}. |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterConfig.property.maintenanceWindowConfig">maintenanceWindowConfig</a></code> | <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfig">BoundaryClusterMaintenanceWindowConfig</a></code> | maintenance_window_config block. |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterConfig.property.projectId">projectId</a></code> | <code>string</code> | The ID of the HCP project where the Boundary cluster is located. |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeouts">BoundaryClusterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterConfig.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

The ID of the Boundary cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.77.0/docs/resources/boundary_cluster#cluster_id BoundaryCluster#cluster_id}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterConfig.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

The password of the initial admin user.

This must be at least 8 characters in length. Note that this may show up in logs, and it will be stored in the state file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.77.0/docs/resources/boundary_cluster#password BoundaryCluster#password}

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterConfig.property.tier"></a>

```typescript
public readonly tier: string;
```

- *Type:* string

The tier that the HCP Boundary cluster will be provisioned as, 'Standard' or 'Plus'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.77.0/docs/resources/boundary_cluster#tier BoundaryCluster#tier}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterConfig.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

The username of the initial admin user.

This must be at least 3 characters in length, alphanumeric, hyphen, or period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.77.0/docs/resources/boundary_cluster#username BoundaryCluster#username}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.77.0/docs/resources/boundary_cluster#id BoundaryCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maintenanceWindowConfig`<sup>Optional</sup> <a name="maintenanceWindowConfig" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterConfig.property.maintenanceWindowConfig"></a>

```typescript
public readonly maintenanceWindowConfig: BoundaryClusterMaintenanceWindowConfig;
```

- *Type:* <a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfig">BoundaryClusterMaintenanceWindowConfig</a>

maintenance_window_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.77.0/docs/resources/boundary_cluster#maintenance_window_config BoundaryCluster#maintenance_window_config}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

The ID of the HCP project where the Boundary cluster is located.

If not specified, the project specified in the HCP Provider config block will be used, if configured.
If a project is not configured in the HCP Provider config block, the oldest project in the organization will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.77.0/docs/resources/boundary_cluster#project_id BoundaryCluster#project_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterConfig.property.timeouts"></a>

```typescript
public readonly timeouts: BoundaryClusterTimeouts;
```

- *Type:* <a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeouts">BoundaryClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.77.0/docs/resources/boundary_cluster#timeouts BoundaryCluster#timeouts}

---

### BoundaryClusterMaintenanceWindowConfig <a name="BoundaryClusterMaintenanceWindowConfig" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfig.Initializer"></a>

```typescript
import { boundaryCluster } from '@cdktf/provider-hcp'

const boundaryClusterMaintenanceWindowConfig: boundaryCluster.BoundaryClusterMaintenanceWindowConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfig.property.day">day</a></code> | <code>string</code> | The maintenance day of the week for scheduled upgrades. |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfig.property.end">end</a></code> | <code>number</code> | The end time which upgrades can be performed. |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfig.property.start">start</a></code> | <code>number</code> | The start time which upgrades can be performed. |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfig.property.upgradeType">upgradeType</a></code> | <code>string</code> | The upgrade type for the cluster. Valid options for upgrade type - `AUTOMATIC`, `SCHEDULED`. |

---

##### `day`<sup>Optional</sup> <a name="day" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfig.property.day"></a>

```typescript
public readonly day: string;
```

- *Type:* string

The maintenance day of the week for scheduled upgrades.

Valid options for maintenance window day - `MONDAY`, `TUESDAY`, `WEDNESDAY`, `THURSDAY`, `FRIDAY`, `SATURDAY`, `SUNDAY`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.77.0/docs/resources/boundary_cluster#day BoundaryCluster#day}

---

##### `end`<sup>Optional</sup> <a name="end" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfig.property.end"></a>

```typescript
public readonly end: number;
```

- *Type:* number

The end time which upgrades can be performed.

Uses 24H clock and must be in UTC time zone. Valid options include - 1 to 24 (inclusive)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.77.0/docs/resources/boundary_cluster#end BoundaryCluster#end}

---

##### `start`<sup>Optional</sup> <a name="start" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfig.property.start"></a>

```typescript
public readonly start: number;
```

- *Type:* number

The start time which upgrades can be performed.

Uses 24H clock and must be in UTC time zone. Valid options include - 0 to 23 (inclusive)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.77.0/docs/resources/boundary_cluster#start BoundaryCluster#start}

---

##### `upgradeType`<sup>Optional</sup> <a name="upgradeType" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfig.property.upgradeType"></a>

```typescript
public readonly upgradeType: string;
```

- *Type:* string

The upgrade type for the cluster. Valid options for upgrade type - `AUTOMATIC`, `SCHEDULED`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.77.0/docs/resources/boundary_cluster#upgrade_type BoundaryCluster#upgrade_type}

---

### BoundaryClusterTimeouts <a name="BoundaryClusterTimeouts" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeouts.Initializer"></a>

```typescript
import { boundaryCluster } from '@cdktf/provider-hcp'

const boundaryClusterTimeouts: boundaryCluster.BoundaryClusterTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.77.0/docs/resources/boundary_cluster#create BoundaryCluster#create}. |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeouts.property.default">default</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.77.0/docs/resources/boundary_cluster#default BoundaryCluster#default}. |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.77.0/docs/resources/boundary_cluster#delete BoundaryCluster#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.77.0/docs/resources/boundary_cluster#create BoundaryCluster#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeouts.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.77.0/docs/resources/boundary_cluster#default BoundaryCluster#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.77.0/docs/resources/boundary_cluster#delete BoundaryCluster#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### BoundaryClusterMaintenanceWindowConfigOutputReference <a name="BoundaryClusterMaintenanceWindowConfigOutputReference" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.Initializer"></a>

```typescript
import { boundaryCluster } from '@cdktf/provider-hcp'

new boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.resetDay">resetDay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.resetEnd">resetEnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.resetStart">resetStart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.resetUpgradeType">resetUpgradeType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDay` <a name="resetDay" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.resetDay"></a>

```typescript
public resetDay(): void
```

##### `resetEnd` <a name="resetEnd" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.resetEnd"></a>

```typescript
public resetEnd(): void
```

##### `resetStart` <a name="resetStart" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.resetStart"></a>

```typescript
public resetStart(): void
```

##### `resetUpgradeType` <a name="resetUpgradeType" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.resetUpgradeType"></a>

```typescript
public resetUpgradeType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.property.dayInput">dayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.property.endInput">endInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.property.startInput">startInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.property.upgradeTypeInput">upgradeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.property.day">day</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.property.end">end</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.property.start">start</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.property.upgradeType">upgradeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfig">BoundaryClusterMaintenanceWindowConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dayInput`<sup>Optional</sup> <a name="dayInput" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.property.dayInput"></a>

```typescript
public readonly dayInput: string;
```

- *Type:* string

---

##### `endInput`<sup>Optional</sup> <a name="endInput" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.property.endInput"></a>

```typescript
public readonly endInput: number;
```

- *Type:* number

---

##### `startInput`<sup>Optional</sup> <a name="startInput" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.property.startInput"></a>

```typescript
public readonly startInput: number;
```

- *Type:* number

---

##### `upgradeTypeInput`<sup>Optional</sup> <a name="upgradeTypeInput" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.property.upgradeTypeInput"></a>

```typescript
public readonly upgradeTypeInput: string;
```

- *Type:* string

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.property.day"></a>

```typescript
public readonly day: string;
```

- *Type:* string

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.property.end"></a>

```typescript
public readonly end: number;
```

- *Type:* number

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.property.start"></a>

```typescript
public readonly start: number;
```

- *Type:* number

---

##### `upgradeType`<sup>Required</sup> <a name="upgradeType" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.property.upgradeType"></a>

```typescript
public readonly upgradeType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BoundaryClusterMaintenanceWindowConfig;
```

- *Type:* <a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterMaintenanceWindowConfig">BoundaryClusterMaintenanceWindowConfig</a>

---


### BoundaryClusterTimeoutsOutputReference <a name="BoundaryClusterTimeoutsOutputReference" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.Initializer"></a>

```typescript
import { boundaryCluster } from '@cdktf/provider-hcp'

new boundaryCluster.BoundaryClusterTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.resetDefault">resetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDefault` <a name="resetDefault" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.resetDefault"></a>

```typescript
public resetDefault(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.property.defaultInput">defaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeouts">BoundaryClusterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.property.defaultInput"></a>

```typescript
public readonly defaultInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BoundaryClusterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.boundaryCluster.BoundaryClusterTimeouts">BoundaryClusterTimeouts</a>

---



